export interface Config {
    token: string;
    mongoURI: string;
    prefix: string;
    verificationLVL: {
        NONE: string;
        LOW: string;
        MEDIUM: string;
        HIGH: string;
        VERY_HIGH: string;
    }
}