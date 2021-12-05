export interface User {
    
        'id': number;
        'name': string;
        'email': string ;
        'mobile': string ;
        'email_verified': number;
        'block': number;
        'update_password'?: string;
        'update_password_confirmation'?: string;
        'current_password'?: string;
        'created_at': string ;
        'updated_at': string;
        'locations': [
            {
                'id': number;
                'address': string ;
                'longitude': string ;
                'latitude': string ;
                'user_id': number ;
                'created_at': string ;
            }
        ];
}
