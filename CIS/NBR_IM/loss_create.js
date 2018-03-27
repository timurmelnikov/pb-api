var xhr = new XMLHttpRequest();

var idAcc = "Z182QPB7000050";                              /* Из АПИ Привата - idAcc */

var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"26.03.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"26.03.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"ClaimPerson":"Іщенко Наталія Володимирівна",			/* Из АПИ Привата - [fio]*/				
"ClaimerPhone":"+380985366136",								/* Из АПИ Привата - phoneClient */
"InsuranceEventPlace":"М.ХАРКІВ ПР. МОСКОВСЬКИЙ,210\/2 КВ.24",  							/* Из АПИ Привата - locationEvent */
"LossInsuranceEvent":4,										/* Характер - Прочие */
"InjuredObjType":3,											/* Тип - Другое имущество (NBR) = 3. Для ЗНБ передавать (IM HI) 2 - Особа (життя/здров`я) */
"EventDescrDisp":"26.03.2018 В 5.30 УТРА С КРІШИ ДОМА УПАЛ СНЕГ И ПРОБИЛ КРІШУ БАЛКОНА.  . Телефон клиента:+380985366136",				/* Из АПИ Привата - descriptionEvent */
"Department":6158,											/* Го-дбс-сп */
"InsuranceNumDoc": "DNHENBR-182H00E", 						/* Из АПИ Привата - ref */
"ExtId": idAcc,   								            /* Из АПИ Привата - idAcc */
"ExtDoc":"\\\\filestore-5\\loss_doc_privat\\"+idAcc, 	    /* Ссылка на документы убытка */
"ExtStatusDeal": 92, 										/* Из АПИ Привата - statusDeal */
"IdDocState": 1, 											/* ИД статуса убытка в КИС. Создаем и Обновляем всегда в статусе 1 - Сбор документов */
//"IdTypeNews": 69											/* Передается при обновлении убытка документами. Для ИВ-ВО передавать (NBR) 69. Для ЗНБ передавать (IM) 68 */


}
);

xhr.open("POST", 'cis/addlossdocument', true);
xhr.onreadystatechange = function () { if (xhr.readyState == 4 && xhr.status == 200) { alert(xhr.responseText); } }

var params = 'formData='+encodeURIComponent(data);
xhr.send(params);