let timeZone = '';
if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export type TUserRole = 'admin' | 'user' | 'superAdmin' | 'client' | 'invited';

export interface IUserAuth {
    email:       string;
    password:    string;
    timeZone:    string;
}
export interface IUser {
    _id?:           string;
    displayName?:   string;
    emailVerify:    boolean;
    isActive:       boolean;
    isNewUser:      boolean;
    photoURL:       PhotoURL;
    email:          string;
    userName:       string;
    timeZone:       string;
    role:           TUserRole
}

export interface PhotoURL {
    url?:       string;
    name:       string;
    key?:       string;
    extension?: string;
    mimetype?:  string;
    size?:      number;
    type?:      string;
    user?:      string;
    color?:     string;
}

export const userDefault: IUser= {
    displayName : 'User Name',
    emailVerify : false,
    isActive    : false,
    isNewUser   : true,
    photoURL    : { name: 'no-image', color: '#056AA7', user: 'A'},
    email       : 'email@default.com', 
    userName    : 'UserName',
    timeZone,
    role        : 'user'
}

