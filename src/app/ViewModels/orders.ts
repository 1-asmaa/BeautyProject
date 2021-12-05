export class Orders {
    'id': number;
    'date': string;
    'time': string;
    'cost': number;
    'order_num': number;
    'order_status': string;
    'payment_status': string;
    'beautician_id': number;
    'user_id': number;
    'payment_method_id': number;
    'location_type': string;
    'beautician': {
        'id': number;
        'beaut_name': string;
    };
    'payment_method': {
        'id': number,
        'name_ar': string,
        'name_en': string
    };
    'user_location': [
      {  'id': number;
        'address': string;
        'longitude': string;
        'latitude': string;
        'user_id' : number;
        'created_at': string;
    }
    ];
    'services': [
        {
            'id': number;
            'name_ar': string;
            'name_en': string;
            'details_en': string;
            'details_ar': string;
            'icon': string;
            'price': string;
            'estimated_time': string;
            'bonus': string;
            'location': string;
            'beautician_id': number;
            'category_id': number;
        }
    ];
    'user': {
        'id': number;
        'name': string;
        'mobile': string;
    };
    'created_at': string;
}
