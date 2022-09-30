export type ParkingOption = 'NO' | 'YES' | 'YES_COVERED' | 'YES_UNCOVERED';

export interface FormType {
    fullName: string;
    email: string;
    address: string;
    floor: number;
    additionals: string[];
    parking: ParkingOption;
    price: number;
    picture: File;
    hasElevator: boolean;
}