/* 搜索框执行列表检索函数 */
function siteSearch() {
  //声明变量，类似C语言中的int的作用
  var
  input = document.getElementById('valueInput'),
  filter = input.value.toUpperCase(),//格式化输入值为统一的大写字母，便于比较
  ul = document.getElementById("searchUL"),
  li = ul.getElementsByTagName('li'),
  a, i, txtValue;
  /*
    变量直接在一个var中一起写了，减少了一点代码量。
    感觉比把声明和赋值分开写方便一些。
  */
  // 循环遍历列表中的所有项目，并隐藏那些与搜索查询不匹配的项
  for (i = 0; i < li.length; ++i) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {//js中用indexOf()方法未找到该值，则返回-1
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}