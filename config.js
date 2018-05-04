
// Values copied from caldavzap config.js file.

var globalAccountSettings=[
    {
        href: 'https://algoo.trac.im/caldav/user/',
        userAuth:
        {
            userName: 'alexi.cauvin@algoo.fr',
            userPassword: 'c60e7504-928c-4c81-84f4-e8d1db7f9a0d'
        },
        timeOut: 90000,
        lockTimeOut: 10000,
        checkContentType: true,
        settingsAccount: false,
        delegation: false,
        forceReadOnly: null,
        ignoreAlarms: false,
        backgroundCalendars: [],
        basehref: 'algoo.trac.im'
    },
    {
        href: 'https://algoo.trac.im/caldav/workspace/',
        userAuth:
        {
            userName: 'alexi.cauvin@algoo.fr',
            userPassword: 'c60e7504-928c-4c81-84f4-e8d1db7f9a0d'
        },
        timeOut: 90000,
        lockTimeOut: 10000,
        checkContentType: true,
        settingsAccount: false,
        delegation: false,
        forceReadOnly: null,
        ignoreAlarms: false,
        backgroundCalendars: [],
        basehref: 'algoo.trac.im'
    },
] ;

var globalBackgroundSync=true;
var globalSyncResourcesInterval=120000;
var globalEnableRefresh=false;
var globalEnableKbNavigation=true;
// var globalInterfaceLanguage=window.parent.globalTracimLang === 'fr' ? 'fr_FR' : window.parent.globalTracimLang; // Côme - 2017/09/14 - line outdated
// globalTracimLang is declared in tracim header (caldavzap in in an iframe)
var globalInterfaceLanguage = (function (lang) {
    switch (lang) {
        case 'fr':
            return 'fr_FR';
        case 'en':
            return 'en_US';
        default:
            return 'en_US';
    }
})(window.parent.globalTracimLang)

var globalInterfaceCustomLanguages=['en_US', 'fr_FR'];
var globalSortAlphabet=' 0123456789'+
    'AÀÁÂÄÆÃÅĀBCÇĆČDĎEÈÉÊËĒĖĘĚFGĞHIÌÍÎİÏĪĮJKLŁĹĽMNŃÑŇOÒÓÔÖŐŒØÕŌ'+
    'PQRŔŘSŚŠȘșŞşẞTŤȚțŢţUÙÚÛÜŰŮŪVWXYÝŸZŹŻŽ'+
    'aàáâäæãåābcçćčdďeèéêëēėęěfgğhiìíîïīįıjklłĺľmnńñňoòóôöőœøõō'+
    'pqrŕřsśšßtťuùúûüűůūvwxyýÿzźżžАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ'+
    'Ьабвгґдеєжзиіїйклмнопрстуфхцчшщюяь';
var globalSearchTransformAlphabet={
    '[ÀàÁáÂâÄäÆæÃãÅåĀā]': 'a', '[ÇçĆćČč]': 'c', '[Ďď]': 'd',
    '[ÈèÉéÊêËëĒēĖėĘęĚě]': 'e', '[Ğğ]': 'g', '[ÌìÍíÎîİıÏïĪīĮį]': 'i',
    '[ŁłĹĺĽľ]': 'l', '[ŃńÑñŇň]': 'n', '[ÒòÓóÔôÖöŐőŒœØøÕõŌō]': 'o',
    '[ŔŕŘř]': 'r', '[ŚśŠšȘșŞşẞß]': 's', '[ŤťȚțŢţ]': 't',
    '[ÙùÚúÛûÜüŰűŮůŪū]': 'u', '[ÝýŸÿ]': 'y', '[ŹźŻżŽž]': 'z'
};
var globalResourceAlphabetSorting=true;
var globalNewVersionNotifyUsers=[];
var globalDatepickerFirstDayOfWeek=1;
var globalHideInfoMessageAfter=1800;
var globalEditorFadeAnimation=666;
var globalEventStartPastLimit=3;
var globalEventStartFutureLimit=3;
var globalTodoPastLimit=1;
var globalLoadedCalendarCollections=[];
var globalLoadedTodoCollections=[];
var globalActiveCalendarCollections=[];
var globalActiveTodoCollections=[];
var globalActiveView='multiWeek';
var globalOpenFormMode='double';
var globalTodoListFilterSelected=['filterAction', 'filterProgress'];
var globalCalendarStartOfBusiness=8;
var globalCalendarEndOfBusiness=17;
var globalDefaultEventDuration=120;
var globalDisplayHiddenEvents=false;
var globalTimeZoneSupport=true;
var globalTimeZone='Europe/Berlin';
var globalTimeZonesEnabled=[];
var globalRewriteTimezoneComponent=true;
var globalRemoveUnknownTimezone=false;
var globalShowHiddenAlarms=false;
var globalIgnoreCompletedOrCancelledAlarms=true;
var globalMozillaSupport=false;
var globalWeekendDays=[0, 6];
var globalAppleRemindersMode=true;
