const apartment_name = document.querySelector("h1").textContent;
const apartment_price = document.getElementById("favoriteClassifiedPrice").getAttribute("value").replace(/ /g,'');
const data_card = document.querySelector(".user-info-phones")

if (data_card) {
  phone_place = data_card.querySelector("dl");
  digits = phone_place.querySelectorAll("dd");
}

const data_user = document.querySelector(".userContactInfo");
if (data_user) {
  phone_place = data_user;
  digits = phone_place.querySelectorAll(".pretty-phone-part");
}

function htmlEscape(str) {
    return String(str)
            .replace(/ /g, '%20')
            .replace(/\n/g, '%0A');
}
  // Check array elements qty
  const box_elem_qty = document.createElement("h3");
  const elem_qty = digits.length;
  box_elem_qty.textContent = `Number of phone numbers found: ${elem_qty}`;
  phone_place.appendChild(box_elem_qty);
  phone_place.appendChild(document.createElement("br"));

  var cur_page_url = window.location.href;

  var stringEN = 'Good afternoon!\n' +
                 'title:\n' +
                 '*'+apartment_name+'*' + '\n' +
                 'price ' + '*'+apartment_price+'*' + '\n' +
                 'link:\n' +
                 cur_page_url;
                       
  var multilineString = stringEN;

  for (var i = 0; i < elem_qty; i++) {    
    wa_full_tel = `${digits[i].textContent.replace(/ /g,'').replace(/[\(\)']+/g,'').replace (/^/,'9')}`;

    const phone_header = document.createElement("h3");
    phone_header.textContent = `${wa_full_tel}`;
    phone_place.appendChild(phone_header);
    phone_place.appendChild(document.createElement("br"));

    const a_href_web = document.createElement("a");
    a_href_web.textContent = '1) [EN] Send via WEB.whatsapp.com';
    a_href_web.href = `https://web.whatsapp.com/send?phone=${wa_full_tel}&text=${htmlEscape(multilineString)}`;
    phone_place.appendChild(a_href_web);
    phone_place.appendChild(document.createElement("br"));
    
    const a_href_api = document.createElement("a");
    a_href_api.textContent = '2) [EN] Send via API.whatsapp.com';
    a_href_api.href = `https://api.whatsapp.com/send?phone=${wa_full_tel}&text=${htmlEscape(multilineString)}`;
    phone_place.appendChild(a_href_api);
    phone_place.appendChild(document.createElement("br"));
    
    const a_href_short = document.createElement("a");
    a_href_short.textContent = '3) [EN] Send via WA.me';
    a_href_short.href = `https://wa.me/send?phone=${wa_full_tel}&text=${htmlEscape(multilineString)}`;
    phone_place.appendChild(a_href_short);
    phone_place.appendChild(document.createElement("br"));
  }
