i = 2;
function loadfunc()
{
    document.getElementById("subbtn").disabled = true;
    document.getElementById("row_1").style.display = "none";
    document.getElementById("del_1").style.display = "none";
    document.getElementById("edit_1").style.display = "none";

}
function togglediv(idval)
{
    if (document.getElementById("row_"+idval).style.display == "none")
        document.getElementById("row_"+idval).style.display = "table-row";
    else
        document.getElementById("row_"+idval).style.display = "none";
}
function addnew()
{
    var rowcontent = '';
    var tablerow = document.getElementById("myTable");
    var row = tablerow.insertRow(-1);
    row.setAttribute("class","datarow");
    row.setAttribute("id","stu_"+i);
    var cel0 = row.insertCell(0);
    var cel1 = row.insertCell(1);
    var cel2 = row.insertCell(2);
    var cel3 = row.insertCell(3);
    var cel4 = row.insertCell(4);
    var cel5 = row.insertCell(5);
    var cel6 = row.insertCell(6);
    var cel7 = row.insertCell(7);
    var cel8 = row.insertCell(8);
    var cel9 = row.insertCell(9);
    cel0.innerHTML = "<input type='checkbox' name='chk_"+i+"' id='chk_"+i+"' onClick='callcheck("+i+")'><a onclick='togglediv("+i+")'><br /><br /><img src='/media_assignment3/down.png' width='25px' /></a>";
    cel1.innerHTML = "Student "+i;
    cel2.innerHTML = "Teacher "+i;
    cel3.innerHTML = "Approved";
    cel4.innerHTML = "Fall";
    cel5.innerHTML = "TA";
    cel6.innerHTML = "12345";
    cel7.innerHTML = "100 %";
    cel8.innerHTML = '<input type="button" name="edit" value="Edit" id="edit_'+i+'" onclick="editrow('+i+');">';
    cel9.innerHTML = '<input type="button" name="delete" value="Delete" id="del_'+i+'" onclick="delrow('+i+');">';
    cel8.setAttribute("class","editcol");
    cel9.setAttribute("class","editcol");
    cel8.setAttribute("id","editcol_"+i);
    cel9.setAttribute("id","delcol_"+i);
    var row = tablerow.insertRow(-1);
    row.setAttribute("class","dropDownTextArea");
    row.setAttribute("id","row_"+i);
    var cel0 = row.insertCell(0);
    cel0.setAttribute("colSpan",8);
    cel0.innerHTML = " Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
    document.getElementById("row_"+i).style.display = "none";
     document.getElementById("del_"+i).style.display = "none";
      document.getElementById("edit_"+i).style.display = "none";
    alert("Student "+i+" Record added successfully");
    i++;
    
}

function callcheck(cval)
{
    if (document.getElementById("chk_"+cval).checked)
    {
        document.getElementById("stu_"+cval).setAttribute("style","background-color:yellow;");
        document.getElementById("subbtn").setAttribute("style","background-color:orange;");
        document.getElementById("edith").classList.remove("editcol");
        document.getElementById("delh").classList.remove("editcol");
        document.getElementById("editcol_"+cval).classList.remove("editcol");
        document.getElementById("delcol_"+cval).classList.remove("editcol");
        document.getElementById("del_"+cval).style.display = "block";
        document.getElementById("edit_"+cval).style.display = "block";
    }
    else
    {
     document.getElementById("stu_"+cval).setAttribute("style","background-color:none;"); 
      //document.getElementById("subbtn").setAttribute("style","background-color:none;");  
       document.getElementById("del_"+cval).style.display = "none";
       document.getElementById("edit_"+cval).style.display = "none";
        document.getElementById("editcol_"+cval).classList.add("editcol");
        document.getElementById("delcol_"+cval).classList.add("editcol");
    }
    checkall();

}
function delrow(cval)
{
     document.getElementById("stu_"+cval).style.display = "none";
     document.getElementById("row_"+cval).style.display = "none";
     alert("Student "+i+" Record Record deleted successfully");
     document.getElementById("edith").classList.add("editcol");
    document.getElementById("delh").classList.add("editcol");
}
function checkall()
{
    for (var ii=1;ii<i;ii++)
    {
        if (document.getElementById("chk_"+ii).checked)
            return false;
    }
    document.getElementById("edith").classList.add("editcol");
    document.getElementById("delh").classList.add("editcol");
    document.getElementById("subbtn").setAttribute("style","background-color:none;"); 
    document.getElementById("subbtn").disabled = true;;
}
function editrow(cval)
{
    //var con = confirm("Edit details of Student "+cval+"\nStudent "+cval+"\nTeacher "+cval+"\nApproved\nFall\nTA\n12345\n100%");
    var con = prompt("Edit Student "+cval+" details","");
    if (con == true)
    {
      alert("Student "+cval+" data updated successfully");
    } 
    //document.getElementById("edith").classList.add("editcol");
    //document.getElementById("delh").classList.add("editcol");
}