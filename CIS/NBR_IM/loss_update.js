var xhr = new XMLHttpRequest();
var data = JSON.stringify(
{
"LossDocumentID":886219,   								/* При обновлении передавать полученный ИД КИС убытка */
"IdDocState": 1, 											/* ИД статуса убытка в КИС. Создаем и Обновляем всегда в статусе 1 - Сбор документов */
"IdTypeNews": 68	/*ВАЖНО!!!! NBR - 68, HI - 69*/
});
xhr.open("POST", 'cis/addlossdocument', true);
xhr.onreadystatechange = function () { if (xhr.readyState == 4 && xhr.status == 200) { alert(xhr.responseText); } }
var params = 'formData='+encodeURIComponent(data);
xhr.send(params);