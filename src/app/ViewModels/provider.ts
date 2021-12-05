export interface Provider {
    'id': number;
    'owner_name': string;
    'beaut_name': string;
    'email': string;
    'mobile':  string;
    'photo':  string;
    'insta_link':  string;
    'address':  string;
    'longitude':  string;
    'latitude':  string;
    'app_commission': number;
    'status': number ;
    'status_updated_at': string;
    'city_id': number;
    'is_active': number ;
    'is_blocked': number ;
    'city': {
        'id': number ;
        'name_en': string ;
        'country_en': string;
    },
    'services': [
        {
            'beautician_id':number ;
            'name_en':  string;
            'location':  string;
            // tslint:disable-next-line:quotemark
            "details_en":  string;
            // tslint:disable-next-line:quotemark
            "icon":  string;
            'price':  string;
            'estimated_time':  string;
            'bonus':  string;
        },
        {
            'beautician_id': number ;
            'name_en':  string;
            'location':  string;
            'details_en':  string;
            'icon':  string;
            'price':  string;
            'estimated_time': string;
            'bonus':  string;
        },
        {
            'beautician_id': number;
            'name_en':  string;
            'location':  string;
            'details_en':  string;
            'icon':  string;
            'price':  string;
            'estimated_time':  string;
            'bonus':  string;
        }
    ],
    'categories': [
        {
            'id': number;
            'name_ar':  string;
            'name_en':  string;
            'icon':  string;
            'pivot': {
                'beautician_id': number;
                'category_id': number ;
            }
        }
    ];
    'payment_methods': [
        {
            'id': number,
            'name_ar':  string;
            'name_en':  string;
        },
        {
            'id': number;
            'name_ar': string;
            'name_en':  string;
        }
    ];

}
