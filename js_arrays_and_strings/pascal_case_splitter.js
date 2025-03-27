function split(text) {
    return text.split(/(?=[A-Z])/).join(' ');
}


console.log(split('SplitMeIfYouCanHaHaYouCantOrYouCan'));