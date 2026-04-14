import os
import re

def process_html_files(root_dir):
    # 匹配各种格式的旧字符集声明
    # 覆盖 <meta charset="gb2312"> 或 <meta http-equiv="Content-Type" ... charset=gb2312">
    charset_regex = re.compile(r'<meta[^>]*charset=["\']?(gb2312|gbk|big5|iso-8859-1)["\']?[^>]*>', re.IGNORECASE)
    
    # 检查是否已经存在 UTF-8 声明
    utf8_check = re.compile(r'<meta[^>]*charset=["\']?utf-8["\']?[^>]*>', re.IGNORECASE)

    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(('.html', '.htm')):
                file_path = os.path.join(root, file)
                
                # 1. 尝试读取文件内容 (优先尝试utf-8，失败则尝试gb18030兼容中文)
                content = ""
                used_encoding = ""
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        used_encoding = 'utf-8'
                except UnicodeDecodeError:
                    try:
                        with open(file_path, 'r', encoding='gb18030') as f:
                            content = f.read()
                            used_encoding = 'gb18030'
                    except:
                        print(f"无法读取文件（未知编码）: {file_path}")
                        continue

                # 2. 修改代码逻辑
                new_content = content
                
                # 如果已经有 UTF-8 声明，则跳过不重复添加
                if utf8_check.search(content):
                    # 如果读取时是GBK但声明是UTF8，我们仍需重新写一遍文件以对齐物理编码
                    if used_encoding == 'utf-8':
                        continue 
                
                # 如果发现旧的 GB2312 声明，直接替换
                if charset_regex.search(content):
                    new_content = charset_regex.sub('<meta charset="UTF-8">', content)
                else:
                    # 如果完全没有 charset 声明，则插在 <head> 标签后面
                    if '<head>' in content.lower():
                        new_content = re.sub(r'(<head[^>]*>)', r'\1\n<meta charset="UTF-8">', content, flags=re.IGNORECASE)
                    else:
                        # 连 head 都没有的特殊情况，插在 html 后面
                        new_content = re.sub(r'(<html[^>]*>)', r'\1\n<head><meta charset="UTF-8"></head>', content, flags=re.IGNORECASE)

                # 3. 物理写回文件 (强制使用 UTF-8 无 BOM)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"成功处理: {file_path} (原读取编码: {used_encoding})")

if __name__ == "__main__":
    # 处理当前目录及子目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    print("开始批量修复网页编码...")
    process_html_files(current_dir)
    print("\n所有网页处理完毕！请上传到服务器测试。")