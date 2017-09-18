//display num

function displayNum(num)
{
  document.getElementById('display').innerHTML += num.value;

}
function clean()
{
  document.getElementById('display').innerHTML = "";
}
function answer()
{
  document.getElementById('display').innerHTML = eval(document.getElementById('display').innerHTML)
}
