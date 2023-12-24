// Simulate asynchronous loading of content
function simulateAsyncLoad(containerId, content, delay) {
    setTimeout(() => {
        document.getElementById(containerId).innerHTML = content;
    }, delay);
}

// Simulate BigPipe-like behavior
simulateAsyncLoad("container1", "<h4>This will be shown first</h4>", 1000);
simulateAsyncLoad("container2", "<h4>This will be shown second</h4>", 2000);
simulateAsyncLoad("container3", "<h4>This will be shown third</h4>", 3000);
