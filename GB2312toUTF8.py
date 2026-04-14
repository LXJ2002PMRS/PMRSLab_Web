import os

def convert_to_utf8(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                try:
                    # 以gb2312读取，以utf-8覆盖写入
                    with open(file_path, 'r', encoding='gb2312', errors='ignore') as f:
                        content = f.read()
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"已转换: {file_path}")
                except Exception as e:
                    print(f"转换失败 {file_path}: {e}")

# 替换为您本地仓库的路径
convert_to_utf8('./')