import { orgDefault, OrgModel } from './org.model';
export class UserModel {
    _id?:           string;
    partnerActive: boolean;
    typePlan:      TypePlan;
    org:           OrgModel | null;
    user:          UserClass;
    type:          Type;
    role:          Role;
    plan:          Plan;
    active: boolean;
    
    constructor(data?: UserModel) {

        if (data) {
            this.partnerActive  = data.partnerActive;
            this.typePlan       = data.typePlan;
            this.org            = data.org;
            this.user           = data.user;
            this.type           = data.type;
            this.role           = data.role;
            this.plan           = data.plan;
            this.active         = data.active;
        } else {
            this.partnerActive  = userMDefault.partnerActive;
            this.typePlan       = userMDefault.typePlan;
            this.org            = userMDefault.org;
            this.user           = userMDefault.user;
            this.type           = userMDefault.type;
            this.role           = userMDefault.role;
            this.plan           = userMDefault.plan;
            this.active         = userMDefault.active;
        }

        
        
    }
}

export enum TypePlan {
    FreelanceFree = 'freelance-free',
    FreelanceStandar = 'freelance-standar',
    FreelancePremium = 'freelance-premium',
    Pyme = 'pyme',
}

export enum Plan {
    Freelance = 'freelance',
    Pyme = 'pyme',
    Enterprise = 'enterprise',
}

export enum Role {
    Admin = 'admin',
    SuperAdmin = 'superAdmin',
    User = 'user',
}

export enum Type {
    Member = 'member',
    Owner = 'owner',
}
export class UserClass {
    _id?:       string;
    displayName?: string;
    emailVerify: boolean;
    isActive: boolean;
    isNewUser: boolean;
    photoURL: PhotoURL;
    email: string;
    userName: string;
    infoAdmin: InfoAdmin[];

    constructor(data: UserClass) {
        
            this.emailVerify = data.emailVerify 
            this.isActive = data.isActive;
            this.isNewUser = data.isNewUser;
            this.photoURL = data.photoURL;
            this.email = data.email;
            this.userName = data.userName;
            this.infoAdmin = data.infoAdmin;        
    }
}
export interface InfoAdmin {
    _id?:                   string;
    daysWork:              DaysWork[];
    hoursWorkForProject:   number;
    projects?:              any[];
    createDate:            Date;
    position:              string;
    userId:                string;
    salary:                number;
    daysHoursWork?:        number;
    role:                  Role;
    valueHour:             number;
    weeklyEffectiveHours?: number;
}
export enum DaysWork {
    Friday      = 'friday',
    Monday      = 'monday',
    Thursday    = 'thursday',
    Tuesday     = 'tuesday',
    Wednesday   = 'wednesday',
    Saturday    = 'saturday',
    Sumday      = 'sumday',
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

export const infoAdminDefault = [{
    daysWork            : [ DaysWork.Monday ],
    hoursWorkForProject : 0,
    createDate          : new Date(),
    position            : 'Employed',
    userId              : '',
    salary              : 0,
    daysHoursWork       : 1,
    role                : Role.User,
    valueHour           : 0,
    weeklyEffectiveHours: 0
}]

export const userCDefault = {
    displayName : 'User Name',
    emailVerify : false,
    isActive    : false,
    isNewUser   : true,
    photoURL    : { name: 'no-image', color: '#056AA7', user: 'A'},
    email       : 'email@default.com', 
    userName    : 'UserName',
    infoAdmin   : infoAdminDefault
}

export const userMDefault = {

    partnerActive   : false,
    typePlan        : TypePlan.Pyme, 
    org             : orgDefault,
    user            : userCDefault,
    type            : Type.Member,
    role            : Role.User,
    plan            : Plan.Pyme,
    active          : false

}


