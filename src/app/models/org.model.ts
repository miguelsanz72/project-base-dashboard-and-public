// prettier-ignore
export class OrgModel {
    _id?:             string;
    createDate:      Date;
    name:            string;
    ownerInWIP:      boolean;
    workingProgress: number;

    constructor(data?: OrgModel) {

        if (data) {
            this.createDate      = data.createDate ;
            this.name            = data.name ;
            this.ownerInWIP      = data.ownerInWIP ;
            this.workingProgress = data.workingProgress  ;
        } else {
            this.createDate      = orgDefault.createDate
            this.name            = orgDefault.name
            this.ownerInWIP      = orgDefault.ownerInWIP
            this.workingProgress = orgDefault.workingProgress
        }
        
    }
}
// prettier-ignore
export const orgDefault = {
    createDate:      new Date(),
    name:            'Organization',
    ownerInWIP:      false,
    workingProgress: 0,
};
