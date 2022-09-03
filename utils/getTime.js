function getTime(created) {

    if (typeof created !== 'number') {
        return created
    }

    let diff = Date.now() - created * 1000;
    let day = 24 * 60 * 60 * 1000;
    if (Math.floor(diff / day) === 0) return "Hôm nay"

    return `${Math.floor(diff / day)} ngày trước`

}

export default getTime

export const getTimeEvent = (time) => {
    const created = new Date(time * 1000)
    var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const day = created.getDay()
    const hours = created.getHours()
    const minutes = created.getMinutes()
    const month = created.getMonth() + 1
    const date = created.getDate()

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} ${days[day]}, ${date < 10 ? '0' + date : date} tháng ${month}`
}