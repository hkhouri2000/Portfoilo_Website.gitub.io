function processCommand(input) {

    // Help command
    if (input == 'help') {
        return `Supported commands: ["<span class="highlight">about</span>", "<span class="highlight">experience</span>", "<span class="highlight">education</span>", "<span class="highlight">skills</span>", "<span class="highlight">contact</span>"]`
    }

    // About command
    // TODO: Specify additional details as needed
    if (input == 'about') {
        return `Hello, I'm Ivan!<br/>
        I'm a computer science student in University of California.`;
    }

    // Experience command
    // TODO: Specify all the experience as needed. Use <br> as line separator.
    if (input == 'experience') {
        return `<span class="highlight">Customer Service Executive</span> - Municipality (June - July 2017)`;
    }

    // Education command
    // TODO: Specify all the education background as needed. Use <br> as line separator.
    if (input == 'education') {
        return `<span class="highlight">University of California</span><br/>
        College of Engineering-B.S. in Computer Science<br/>
        Eberly College of Science-B.S. in Mathematics, System Analysis<br/>
        <span class="highlight">Anticipated graduation</span>: Dec 2025<br/>
        <span class="highlight">Cumulative GPA</span>: 3.95/4.00<br/>
        <span class="highlight">Relevant Coursework</span>: Data Structure & Algorithms, Computer Organization and Design, Systems Programming, AI, Computer Vision, Quantum Computation, Database Management Systems, Programming Languages Concepts, Operating Systems, Object Oriented Programming, Discrete Mathematics, Numerical Analysis, Linear Programs, Linear Algebra, Theory of Games, Real Analysis, Blockchain, Probability Theory
        `;
    }

    // Skills command 
    // TODO: Specify all the skills as needed. Use <br> as line separator.
    if (input == 'skills') {
        return `<span class="highlight">Java</span>, Python, C#, C, HTML, CSS, JavaScript, TypeScript, Verilog, KQL, SQL<br/>
        <span class="highlight">React</span>, OpenCV, Kali Linux, Honeycomb, OpenTelemetry, SQLMap, Hashcat<br/>
        <span class="highlight">Docker</span>, VirtualBox, Android Studio, Firebase Realtime Database, Parse Server, GitHub, Burp, Vivado, Power BI<br/>
        <span class="highlight">Fluent in English</span>, Russian
        `;
    }

    // Contact command
    // TODO: Specify the contact as needed. Use <br> as line separator.
    if (input == 'contact') {
        return `<span class="highlight">Ivil1976@gmail.com</span> <br/> (214)-203-9583 `;
    }

    return `<span class="error">Unknown command</span>: ${input}`;
}

function sendCommand(event) {
    // Check if enter is pressed
    if (event.keyCode != 13)
        return;

    // Get the command input and clear the field
    let input = this.value;
    this.value = '';

    // Ignore if input is empty
    if (input.length == 0)
        return;

    // Add the output to the display
    let outputs = document.getElementById('terminal-outputs');

    // Check if clear command is given
    if (input == 'clear') {
        outputs.innerHTML = '';
        return;
    }

    // Process the command input 
    let output = processCommand(input);

    // Add the command 
    let commandOutput = document.createElement('div', { 'class': 'terminal-command' });
    commandOutput.innerHTML = `<span>&#10140;&nbsp;</span><span>${input}</span>`;

    let responseOutput = document.createElement('div', { 'class': 'terminal-output' });
    responseOutput.innerHTML = output;

    outputs.appendChild(commandOutput);
    outputs.appendChild(responseOutput);

    document.getElementById('terminal-out').scrollTop = responseOutput.offsetTop;
}

// Capture onload of the page to register event handlers
window.onload = function () {
    // Register handler
    document.getElementById('terminal-input-field').onkeydown = sendCommand;
}