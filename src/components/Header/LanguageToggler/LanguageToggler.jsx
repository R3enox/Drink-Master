import { useTranslation } from 'react-i18next';
import '../../../i18n';

const LanguageToggler = () => {
const { i18n } = useTranslation();
const currentLang = i18n.language;
    
    const switchLanguage = () => {
        if (currentLang === 'en') {
            i18n.changeLanguage('uk')
        } 
        i18n.changeLanguage('en')
    }

    return (
        <>
            <button
                className="text-[14px] hover:text-grey-text-color focus:text-grey-text-color transition-colors focus:outline-none"
                disabled={currentLang === 'en'}
                onClick={() => switchLanguage()}
            >
                EN
            </button>
            <button
                className="text-[14px] hover:text-grey-text-color focus:text-grey-text-color transition-colors focus:outline-none"
                disabled={currentLang === 'uk'}
                onClick={() => switchLanguage()}
            >
                UK
            </button>
        </>  
    );
};
export default LanguageToggler;

