import http from 'node:http';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>agent-qa Test Application</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 2rem; }
    .card { background: #1e293b; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5); }
    h1 { color: #38bdf8; margin-top: 0; }
    nav { display: flex; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #334155; padding-bottom: 1rem; }
    nav a { color: #94a3b8; text-decoration: none; font-weight: 600; cursor: pointer; }
    nav a.active { color: #38bdf8; border-bottom: 2px solid #38bdf8; padding-bottom: 4px; }
    ul { list-style: none; padding: 0; }
    li { background: #334155; margin: 0.5rem 0; padding: 0.75rem 1rem; border-radius: 6px; display: flex; justify-content: space-between; }
    input[type="text"] { background: #0f172a; border: 1px solid #475569; color: #fff; padding: 0.5rem 1rem; border-radius: 6px; width: 70%; }
    button { background: #0284c7; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; cursor: pointer; }
    button:hover { background: #0369a1; }
    .status { margin-top: 1rem; color: #4ade80; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>agent-qa Verification Workspace</h1>
    <nav>
      <a class="active" id="nav-dashboard">Dashboard</a>
      <a id="nav-tasks">Tasks</a>
      <a id="nav-settings">Settings</a>
    </nav>
    <div id="content">
      <h2>Welcome to agent-qa QA App</h2>
      <p id="welcome-message">System Status: Operational</p>
      
      <h3>Add New QA Task</h3>
      <div style="display: flex; gap: 0.5rem;">
        <input type="text" id="task-input" placeholder="Enter task name..." value="Verify user login flow" />
        <button id="add-task-btn" onclick="addTask()">Add Task</button>
      </div>

      <h3>Active Task List</h3>
      <ul id="task-list">
        <li><span>Run Playwright web test suite</span> <span style="color:#38bdf8">Completed</span></li>
      </ul>
      <p class="status" id="task-counter">Total Tasks: 1</p>
    </div>
  </div>

  <script>
    function addTask() {
      const input = document.getElementById('task-input');
      const val = input.value.trim();
      if (!val) return;
      const list = document.getElementById('task-list');
      const li = document.createElement('li');
      li.innerHTML = '<span>' + val + '</span> <span style="color:#4ade80">Active</span>';
      list.appendChild(li);
      input.value = '';
      const counter = document.getElementById('task-counter');
      const count = list.querySelectorAll('li').length;
      counter.textContent = 'Total Tasks: ' + count;
    }
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Local test application running at http://127.0.0.1:${PORT}`);
});

setInterval(() => {}, 60000);
