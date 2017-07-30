			function saveTextAsFile() {
			    var recentQuestion = document.getElementById("question").value;
			    var textToSave = document.getElementById("question").value + "?" + document.getElementById("one").value + "?" + document.getElementById("two").value + "?" +
			        document.getElementById("three").value + "?" + document.getElementById("four").value;
			    var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
			    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
			    var fileNameToSaveAs = "question";

			    var downloadLink = document.createElement("a");
			    downloadLink.download = fileNameToSaveAs;
			    downloadLink.innerHTML = "Download File";
			    downloadLink.href = textToSaveAsURL;
			    downloadLink.onclick = destroyClickedElement;
			    downloadLink.style.display = "none";
			    document.body.appendChild(downloadLink);

			    downloadLink.click();
			}

			function destroyClickedElement(event) {
			    document.body.removeChild(event.target);
			}

			function loadFileAsText() {
			    var fileToLoad = "question.txt";

			    var fileReader = new FileReader();
			    fileReader.onload = function(fileLoadedEvent) {
			        //var lines = this.fileToLoad.split('?');
			        var array = fileToLoad.toString().split("?");
			        for (i in array) {
			            //array(array[i]);
			        }
			        var textFromFileLoaded = fileLoadedEvent.target.result;
			        document.getElementById("inputTextToSave").value = textFromFileLoaded;
			    };
			    fileReader.readAsText(fileToLoad, "UTF-8");
			}