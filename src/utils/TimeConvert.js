export default function timeConvert(num) {
    num = num.replace('min', '').trim()
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h" + rminutes + "m";
}