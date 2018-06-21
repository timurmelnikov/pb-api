<?php
set_time_limit(5000000);

/*
Ожидание сведений
Статус присваивается при ожидание от клиентов информации для возможности принятия решения
"ria_Type": "b",
*/

require_once('security/settings.php');

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url_operation);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSLKEY, dirname(__FILE__) . "/security/key.pem");
curl_setopt($curl, CURLOPT_SSLCERT, dirname(__FILE__) . "/security/19dec_cert.pem");
curl_setopt($curl, CURLOPT_KEYPASSWD, $curl_password);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Accept: application/json',
    'sid: Pa9tees9hequooQu5ahpo',
));

curl_setopt($curl, CURLOPT_POSTFIELDS, '{
    "opCode": "waitInfo",
    "request": {
        "req_ID": "Z185KPB70000FM"
    },
    "actionLst": [
        {
            "ria_Type": "b",
            "ria_Comment": "Паспорт та ІПН код страхувальника та/або власника майна.;Технічний паспорт на застраховане майно.;Довідка з компетентних органів (ЖЕКу/ОСББ/ МЧС і т.д.);Кошторис на відновлення майна, калькуляцію збитків.;Детальне пояснення, як трапилась подія, коли помітили подію, які дії відразу були виконані, для зменшення збитків та які компетентні органи були повідомлені.",
	        "ria_DatE": "2018-07-03T23:59:59.000"
        }
    ]
}');

set_time_limit(300);

$data = curl_exec($curl);
curl_close($curl);

echo '<pre>';
//print_r(json_decode($data, true));
print_r($data);
echo '</pre>';

/*
Соответствия полей
 "req_ID" = ID Заявки Привата
 "ria_DatE" = поле ответа КИС - "date_sub": "2018-03-25",
 "ria_Comment" = поле ответа КИС - "event_comments": "Текст ответа..." (апострафы экранировать \')
 */