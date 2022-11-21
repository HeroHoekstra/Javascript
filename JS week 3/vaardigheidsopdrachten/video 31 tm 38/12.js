function magStuderen(age, vooropleiding) {
    if (age > 10) {
        switch(vooropleiding) {
            case 'vwo':
            case 'havo':
            case 'vmbo':
                return true;
                break;

            default:
                return false;
                break;
        }
    }
}

const ik = magStuderen(16, 'vmbo');