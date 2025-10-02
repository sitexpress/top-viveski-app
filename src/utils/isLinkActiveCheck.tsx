    export const isLinkActiveCheck = (link: string, activeLink:string) => {
        if (link === activeLink) {
            return true;
        }
        return false;
    };