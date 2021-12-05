export interface Coupon {
    'id': number ;
    'code': string ;
    'type': string;
    'value': number;
    'valid_from': string;
    'valid_until': string;
    'beautician':[
        {
            'beautician_id': number ;
            'owner_name': string;
            'beaut_name': string;
            'email': string;
            'mobile': string ;
        }
    ]

}
