function toggleRow(e) {
	var subRow = e.parentNode.parentNode.nextElementSibling;
	subRow.style.display = subRow.style.display === 'none' ? 'table-row' : 'none';

	var img = e.getElementsByTagName('img')[0];
	var value = e.getAttribute("aria-expanded");

	if (value == "false") {
		e.setAttribute("aria-expanded", "true");
		img.setAttribute("src", "collapse.png");
		img.setAttribute("alt", "Collapse child row");
	} else {
		e.setAttribute("aria-expanded", "false");
		img.setAttribute("src", "expand.png");
		img.setAttribute("alt", "Expand child row with more information");
	}
}  