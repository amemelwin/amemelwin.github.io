const en_month_lists = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const jp_month_lists = ['１月', '２月', '３月', '４月', '５月', '６月', '７月', '８月', '９月', '１０月', '１１月', '１２月'];
const mm_month_lists = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'];
const mm_day_lists = ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'];
const en_day_lists = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const jp_day_lists = ['日', '月', '火', '水', '木', '金', '土'];
/*
    @param timeStr<string> @example 2023-01-29T17:52:16.184742+06:30
    Author: Arkar Mann Aung For A Mie Mie Lwin
    Date: 1/30/2023
    TimeZone Theory
    myOffset>otherCountry
    true=> myOffset - otherCountry
    false=> otherCountry - myOffset
*/
export const timeConverter = (timeStr: string,local: string) => {
    const GMT = new Date(timeStr);
    const jpOffset = -540;const mmOffset = -390; const enOffset = 0;
    const myOffset = GMT.getTimezoneOffset();
    const jpCorrection = myOffset>jpOffset? Math.abs(myOffset-jpOffset) : -Math.abs(jpOffset-myOffset);
    const enCorrection = myOffset>enOffset? Math.abs(myOffset-enOffset) : -Math.abs(enOffset-myOffset);
    const mmCorrection = myOffset>mmOffset? Math.abs(myOffset-mmOffset) : -Math.abs(mmOffset-myOffset);

    const userTimeZoneOffset = ((local==='jp'?jpCorrection: local==='mm'?mmCorrection:enCorrection)* 60000) // getTimezoneOffset is minute change to milisecond
    const time = new Date(GMT.getTime() + userTimeZoneOffset);
    const [removeOffset] = timeStr.split('+');
    const [x, y] = removeOffset.split('T');
    const hrMin = y.substring(0, 5);
    const day = time.getDate();
    const month = time.getMonth();
    const d = time.getDay();
    const enMonth = en_month_lists[month];
    const jpMonth = jp_month_lists[month];
    const mmMonth = mm_month_lists[month];
    const enDay = en_day_lists[d];
    const jpDay = jp_day_lists[d];
    const mmDay = mm_day_lists[d];
    return { day, hrMin, enMonth, jpMonth, mmMonth, enDay, jpDay, mmDay }
}