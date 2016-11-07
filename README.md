# jQuery activePlaceholders
A simple, lightweight plugin to make interactive input placeholders.

##Demo 
[Check demo](https://sikhub.github.io/active-placeholders/)

##Usage

First, include the required files:
``` html
<script src='//code.jquery.com/jquery-1.10.2.min.js'></script>
<script src='active-placeholders.min.js'></script>
```

Change HTML structure to this:
``` html
<div class="active-placeholders">
	<label for="name">Name</label>
	<input type="text" id="name" class="form-control">
</div>
```

Init active placeholders plugin on inputs:
``` html
<script>
	$(document).ready(function(){			
		$('.active-placeholders').activePlaceholders();
	});
</script>
```
