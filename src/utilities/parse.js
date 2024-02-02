export default function parseISBN(isbnStr) {
	if (isbnStr.includes(':')) {
		return isbnStr.split(':')[1];
	} else {
		return isbnStr;
	}
}
