var f_name ='harshavardhan',
    l_name ='bv',
    F_name ='Harshavardhan',
    L_name ='BV',
    alter_ego = 'rip-deadman-rip',
    mail = 'live.com',
    isd = '+91',
    ph_front = '944'
    ph_mid = '580',
    ph_end = '2699';

function ePost(){
    mail_link = 'mailto:'+l_name+'_'+f_name+'@'+mail;
    window.open(mail_link,"_self");
}

function grahamBell(){
    phone_link='tel:'+isd+'-'+ph_front+'-'+ph_mid+'-'+ph_end;
    window.open(phone_link,"_self");
}

function neoMorpheus(){
    mat_link = 'https://matrix.to/#/@'+alter_ego+':matrix.org';
    window.open(mat_link, "_blank");
}

function morseCode(){
    tele_link = 'https://t.me/'+F_name+L_name;
    window.open(tele_link, "_blank");
}