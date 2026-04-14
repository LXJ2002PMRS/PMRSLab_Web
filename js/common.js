// 文件位置： /js/common.js

function renderHeader(basePath) {
    // 动态计算日期
    var tmpDate = new Date();
    var date = tmpDate.getDate();
    var month = tmpDate.getMonth() + 1;
    var year = tmpDate.getFullYear();
    if (year < 1000) year += 1900;
    var myArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var weekday = myArray[tmpDate.getDay()];
    var dateStr = year + "-" + month + "-" + date + "&nbsp;" + weekday;

    var html = '' +
    // 关键：保留原有的最外层 1108 表格（注意：这里的 table 和 tr、td 标签都没有闭合，包住了整个正文）
    '<table width="1108" height="860" border="0" align="center" cellspacing="3" bgcolor="#FFFFFF">' +
      '<tr>' +
        '<td width="1100" valign="top">' +
          
          // 顶部 Banner 图片
          '<table width="952" height="132" border="0" align="center" cellspacing="1">' +
            '<tr><td width="594" colspan="2" valign="top" background="' + basePath + 'bmp/webtitle.jpg" bgcolor="#F0F0F0"><p>&nbsp;</p></td></tr>' +
          '</table>' +
          
          // 导航栏菜单
          '<table width="960" height="26" border="0" align="center">' +
            '<tr>' +
              '<td width="960" height="26" background="' + basePath + 'bmp/cnz03menubg1 .gif">' +
                '<table width="960" border="0">' +
                  '<tr>' +
                    '<th width="176" scope="col"><div align="left" class="data12">' + dateStr + '</div></th>' +
                    '<th width="96" scope="col"><div align="right"><a href="' + basePath + 'index.html" target="_parent" class="style19">首页</a></div></th>' +
                    '<th width="120" scope="col"><div align="right"><a href="' + basePath + 'PMRS_Lab-profile.html" target="_parent" class="style19">实验室概况</a></div></th>' +
                    '<th width="120" scope="col"><div align="right"><a href="' + basePath + 'PMRS_news.html" target="_parent" class="style19">实验室动态</a></div></th>' +
                    '<th width="100" scope="col"><div align="right"><a href="' + basePath + 'PMRS_publications.html" target="_parent" class="style19">学术论文</a></div></th>' +
                    '<th width="100" scope="col"><div align="right"><a href="' + basePath + 'PMRS_projects.html" target="_parent" class="style19">科研项目</a></div></th>' +
                    '<th width="100" scope="col"><div align="right"><a href="' + basePath + 'PMRS_researcher.html" target="_parent" class="style19">研究人员</a></div></th>' +
                    '<th width="100" scope="col"><div align="right"><a href="' + basePath + 'PMRS_exhibitions.html" target="_parent" class="style19">成果展示</a></div></th>' +
                    '<th width="100" scope="col"><div align="right"><a href="' + basePath + 'PMRS_social.html" target="_parent" class="style19">科普·新闻</a></div></th>' +
                    '<th width="100" scope="col">&nbsp;</th>' +
                  '</tr>' +
                '</table>' +
              '</td>' +
            '</tr>' +
          '</table>';
    
    document.write(html);
}

function renderFooter(basePath) {
    var html = '' +
          // 底部版权信息表格
          '<table width="950" height="100" border="1" align="center">' +
            '<tr><td height="10">&nbsp;&nbsp;</td></tr>' +
            '<tr><td>' +
              '<div align="left">' +
                '<div style="position:relative;">' +
                  '<img src="' + basePath + 'bmp/bottom1.jpg" width="950" height="112" border="0" usemap="#Map" href="mailto" />' +
                  '<div style="position:absolute;z-index:2;left:445px;top:25px">' +
                    '<a href="https://beian.miit.gov.cn/"><font size="2" color="yellow">备案序号：京ICP备05080539号-7</font></a><br />' +
                    '<font size="2" color="yellow">单位：中国科学院空天信息创新研究院行星制图与遥感实验室<br /></font>' +
                    '<font size="2" color="yellow">地址：北京市朝阳区大屯路甲20号北<br /></font>' +
                    '<font size="2" color="yellow">邮编：100101</font>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</td></tr>' +
          '</table>' +
        // 关键：闭合头部函数中打开的 1108 最外层大表格
        '</td>' +
      '</tr>' +
    '</table>';
    
    document.write(html);
}