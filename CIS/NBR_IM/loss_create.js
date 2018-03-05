var xhr = new XMLHttpRequest();
var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"05.03.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"05.03.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"ClaimPerson":"Зіньків Тетяна Богданівна",					/* Из АПИ Привата - [fio]*/				
"ClaimerPhone":"+380662618748",								/* Из АПИ Привата - phoneClient */
"InsuranceEventPlace":"Тернополь",  							/* Из АПИ Привата - locationEvent */
"LossInsuranceEvent":4,										/* Характер - Прочие */
"InjuredObjType":2,											/* Тип - Другое имущество (NBR) = 3. Для ЗНБ передавать (IM HI) 2 - Особа (життя/здров`я) */
"EventDescrDisp":"Анемия",				/* Из АПИ Привата - descriptionEvent */
"Department":6158,											/* Го-дбс-сп */
"InsuranceNumDoc": "DNH0HI-180Q3T3", 						/* Из АПИ Привата - ref */
"ExtId": "Z180QPB30003L9",   								/* Из АПИ Привата - idAcc */
"ExtDoc":"\\\\filestore-5\\loss_doc_privat\\Z180QPB30003L9", 	/* Ссылка на документы убытка */
"ExtStatusDeal": 92, 										/* Из АПИ Привата - statusDeal */
"IdDocState": 1, 											/* ИД статуса убытка в КИС. Создаем и Обновляем всегда в статусе 1 - Сбор документов */
//"IdTypeNews": 69											/* Передается при обновлении убытка документами. Для ИВ-ВО передавать (NBR) 69. Для ЗНБ передавать (IM) 68 */


}
);

xhr.open("POST", 'cis/addlossdocument', true);
xhr.onreadystatechange = function () { if (xhr.readyState == 4 && xhr.status == 200) { alert(xhr.responseText); } }

var params = 'formData='+encodeURIComponent(data);
xhr.send(params);