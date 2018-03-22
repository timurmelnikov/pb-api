var xhr = new XMLHttpRequest();
var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"22.03.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"19.03.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"ClaimPerson":"Назаренко Денис Вікторович",					/* Из АПИ Привата - [fio]*/				
"ClaimerPhone":"+380679842458",								/* Из АПИ Привата - phoneClient */
"InsuranceEventPlace":"Днепр",  							/* Из АПИ Привата - locationEvent */
"LossInsuranceEvent":4,										/* Характер - Прочие */
"InjuredObjType":2,											/* Тип - Другое имущество (NBR) = 3. Для ЗНБ передавать (IM HI) 2 - Особа (життя/здров`я) */
"EventDescrDisp":"Острый назофаренгит, острый двухсоронний сальпингоотит. Телефон клиента:+380679842458",				/* Из АПИ Привата - descriptionEvent */
"Department":6158,											/* Го-дбс-сп */
"InsuranceNumDoc": "DNH0HI-181L5X3", 						/* Из АПИ Привата - ref */
"ExtId": "Z182MPB70000BN",   								/* Из АПИ Привата - idAcc */
"ExtDoc":"\\\\filestore-5\\loss_doc_privat\\Z182MPB70000BN", 	/* Ссылка на документы убытка */
"ExtStatusDeal": 92, 										/* Из АПИ Привата - statusDeal */
"IdDocState": 1, 											/* ИД статуса убытка в КИС. Создаем и Обновляем всегда в статусе 1 - Сбор документов */
//"IdTypeNews": 69											/* Передается при обновлении убытка документами. Для ИВ-ВО передавать (NBR) 69. Для ЗНБ передавать (IM) 68 */


}
);

xhr.open("POST", 'cis/addlossdocument', true);
xhr.onreadystatechange = function () { if (xhr.readyState == 4 && xhr.status == 200) { alert(xhr.responseText); } }

var params = 'formData='+encodeURIComponent(data);
xhr.send(params);