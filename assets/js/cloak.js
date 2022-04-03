var f_name='harshavardhan',l_name='bv',F_name='Harshavardhan',L_name='BV',alter_ego='rip-deadman-rip',leet_ego='d3dm4n',mail='live.com',isd='+91',ph_front='944',ph_mid='580',ph_end = '2699',d_code='3807';

function hyperClick(type){
    switch (type) {
        case 'email': link='mailto:'+l_name+'_'+f_name+'@'+mail;target="_self";
        break;
        case 'phone': link='tel:'+isd+'-'+ph_front+'-'+ph_mid+'-'+ph_end;target="_self";
        break;
        case 'signal': link='https://signal.me/#p/+'+isd+ph_front+ph_mid+ph_end;;target="_blank";
        break;
        case 'matrix': link='https://matrix.to/#/@'+alter_ego+':matrix.org';target="_blank";
        break;
        case 'telegram': link='https://t.me/'+F_name+'_'+L_name;target="_blank";
        break;
        case 'discord': link='https://discord.com/app';target="_blank";
        break;
        default: link='#';target="_self";
    }
    window.open(link, target);
}

function hyperText(type){
    switch (type) {
        case 'email': text=l_name+'_'+f_name+'@'+mail;
        break;
        case 'phone': text=isd+'-'+ph_front+'-'+ph_mid+'-'+ph_end;
        break;
        case 'signal': text=isd+'-'+ph_front+'-'+ph_mid+'-'+ph_end;
        break;
        case 'matrix': text=alter_ego;
        break;
        case 'telegram': text=F_name+L_name;
        break;
        case 'discord': text=leet_ego+'#'+d_code;
        break;
        default: text='';
    }
}