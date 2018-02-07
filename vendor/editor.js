/*
*	modified from https://codepen.io/aktorou/pen/YWxorK?editors=1100
*	original author: Ashley Ktorou
*/

const tabCharacter = "\t";
const tabOffset = 1;

/*------------------------------------------
	Render existing code
------------------------------------------*/
$(document).on('ready', function(){
	hightlightSyntax();
	
	emmet.require('textarea').setup({
		pretty_break: true,
		use_tab: true
	});
});

/*------------------------------------------
	Capture text updates
------------------------------------------*/
$(document).on('ready load keyup keydown change', '.editor', hightlightSyntax);


/*------------------------------------------
	Run syntax hightlighter
------------------------------------------*/
function hightlightSyntax(){
	[...document.querySelectorAll('.editor')].forEach( editor => {
		const content = editor.value;
		const codeHolder = editor.nextElementSibling.firstChild;
		const escaped = escapeHtml(content);
	
		codeHolder.innerHTML = escaped;
	
		hljs.highlightBlock(codeHolder);
	});
}


/*------------------------------------------
	String html characters
------------------------------------------*/
function escapeHtml(unsafe) {
	return unsafe
			 .replace(/&/g, "&amp;")
			 .replace(/</g, "&lt;")
			 .replace(/>/g, "&gt;")
			 .replace(/"/g, "&quot;")
			 .replace(/'/g, "&#039;");
}


/*------------------------------------------
	Enable tabs in textarea
------------------------------------------*/
$(document).delegate('.allow-tabs', 'keydown', function(e) {
	var keyCode = e.keyCode || e.which;

	if (keyCode == 9) {
		e.preventDefault();
		var start = $(this).get(0).selectionStart;
		var end = $(this).get(0).selectionEnd;

		// set textarea value to: (text before caret) + tab + (text after caret)
		$(this).val( $(this).val().substring(0, start) + tabCharacter + $(this).val().substring(end) );

		// put caret at right position again
		$(this).get(0).selectionStart =
		$(this).get(0).selectionEnd = start + tabOffset;
	}
});
