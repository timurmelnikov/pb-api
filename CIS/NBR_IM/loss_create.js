var xhr = new XMLHttpRequest();
var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"26.02.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"20.02.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"ClaimPerson":"Мітрофанов Олександр Борисович",					/* Из АПИ Привата - [fio]*/				
"ClaimerPhone":"+380936926562",								/* Из АПИ Привата - phoneClient */
"InsuranceEventPlace":"Одесса",  							/* Из АПИ Привата - locationEvent */
"LossInsuranceEvent":4,										/* Характер - Прочие */
"InjuredObjType":3,											/* Тип - Другое имущество (NBR) = 3. Для ЗНБ передавать (IM HI) 2 - Особа (життя/здров`я) */
"EventDescrDisp":"Трещина в стене. Телефон клиента:+380671945265",				/* Из АПИ Привата - descriptionEvent */
"Department":6158,											/* Го-дбс-сп */
"InsuranceNumDoc": "DNH0NBR-18123UW", 						/* Из АПИ Привата - ref */
"ExtId": "Z181QPB70000EM",   								/* Из АПИ Привата - idAcc */
"ExtDoc":"\\\\filestore-5\\loss_doc_privat\\Z181QPB70000EM", 	/* Ссылка на документы убытка */
"ExtStatusDeal": 92, 										/* Из АПИ Привата - statusDeal */
"IdDocState": 1, 											/* ИД статуса убытка в КИС. Создаем и Обновляем всегда в статусе 1 - Сбор документов */
//"IdTypeNews": 69											/* Передается при обновлении убытка документами. Для ИВ-ВО передавать (NBR) 69. Для ЗНБ передавать (IM) 68 */


}
);

xhr.open("POST", 'cis/addlossdocument', true);
xhr.onreadystatechange = function () { if (xhr.readyState == 4 && xhr.status == 200) { alert(xhr.responseText); } }

var params = 'formData='+encodeURIComponent(data);
xhr.send(params);