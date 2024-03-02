
use wasm_bindgen::prelude::wasm_bindgen;

use std::str;
use base64::prelude::*;
use aes::Aes128;
use ofb::Ofb;
use ofb::cipher::{KeyIvInit, StreamCipher};


type AesOfb = Ofb<Aes128>;


#[wasm_bindgen]
pub fn times_two(a: i32) -> i32 {
    let z = a*2;
    z
}

#[wasm_bindgen]
pub fn encrypt(_keye: &str, _ive: &str, _pte: &str) -> String {
    
    if _keye.chars ().count () != 16 { 
        let _encrypted_output:String  = "Key is not 16 Characters".to_string();
        return _encrypted_output;
    } else if _ive.chars ().count () != 16 {
        let _encrypted_output: String = "IV is not 16 Characters".to_string();
        return _encrypted_output;
    }else {
        
    let keye:Vec<u8>   = _keye.trim().as_bytes().to_vec();
    let ive:Vec<u8>  = _ive.trim().as_bytes().to_vec();
    let mut pte:Vec<u8>  = _pte.trim().as_bytes().to_vec();
    let mut cipher = AesOfb::new_from_slices(&keye, &ive).unwrap();
    cipher.apply_keystream( &mut pte);
    let _encrypted_output = BASE64_STANDARD.encode(pte);
    _encrypted_output
    }
}



#[wasm_bindgen]
pub fn decrypt(_keyd: &str, _ivd: &str, _ctd_: &str) -> String {

    if _keyd.chars ().count () != 16 { 
        let _decrypted_output:String  = "Key is not 16 Characters".to_string();
        return _decrypted_output;
    } else if _ivd.chars ().count () != 16 {
        let _decrypted_output: String = "IV is not 16 Characters".to_string();
        return _decrypted_output; 
    }else {

    let keyd:Vec<u8>  = _keyd.trim().as_bytes().to_vec();
    let ivd:Vec<u8>  = _ivd.trim().as_bytes().to_vec();
    let ctd:&str  = _ctd_.trim();

    let mut _ctd = match BASE64_STANDARD.decode(ctd) {
        Ok(v) => v, 
        Err(_e) => return format!("Invalid Credentials"), };

    let mut cipher =  AesOfb::new_from_slices(&keyd, &ivd).unwrap();
    cipher.apply_keystream(  &mut _ctd);

    let _decrypted_output = match str::from_utf8(&_ctd) {
        Ok(s) => s.to_string(), 
        Err(_e) => return format!("Invalid Credentials"), };
      
    _decrypted_output
    }
}


#[wasm_bindgen]
pub fn count_characters(input: &str) -> String {
    let num_chars = input.chars().count();
    if num_chars == 16 {
        return format!("✔️");
    } else {
        return format!("{} / 16", num_chars);
    }
}

