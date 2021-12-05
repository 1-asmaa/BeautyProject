export interface Comment {
    'id': number ;
    'value': number ;
    'comment': string;
    'order_num': number;
    'beautician_id': number ;
    'user_id': number ;
    'created_at': string ;
    'user': {
        'id': number;
        'name': string;
    };
}
