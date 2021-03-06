<?php
set_time_limit(5000000);

require_once('security/settings.php');
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url_request_report);
curl_setopt($curl, CURLOPT_POST, true);
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

//за 26.12.2017 проверил 
curl_setopt($curl, CURLOPT_POSTFIELDS, '{
    "date": "2018-05-22",   
    "tlCode": "HI",        
    "ircId": "VU",
    "reportCode": "AR"
}');

$data = curl_exec($curl);
curl_close($curl);

echo '<pre>';
print_r(json_decode($data, true));
echo '</pre>';