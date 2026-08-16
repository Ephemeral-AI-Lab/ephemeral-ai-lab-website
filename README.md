# 🧪 Ephemeral AI Lab

> ⚡ Building the infrastructure for ephemeral agents and durable results.

## ⏳ Ephemerality: Taking Multi-Agent Scale Beyond Imagination

Ephemerality is our core belief.

An AI agent’s working environment should be temporary by default. An agent should be able to receive a fresh workspace, work in isolation, experiment freely, publish the results that matter, and then disappear without leaving behind unnecessary infrastructure or duplicated state.

Ephemerality does not mean losing data.

It means separating temporary execution from durable results:

- ⚡ Workspaces are created quickly
- 🔒 Agents work in isolation
- 🗑️ Temporary state is cheap to modify and discard
- 💾 Unchanged data is shared instead of copied
- 📦 Valuable results are explicitly published and preserved
- ♻️ Failed experiments disappear without polluting the main system

We believe this model is necessary for large-scale agent collaboration.

AI agents will not work as one assistant in one workspace forever. They will work in parallel, explore different solutions, run experiments, and collaborate on the same computer.

Our goal is to make it possible for thousands of agents to code on one computer through efficient storage, isolated execution, and durable publication.

> 🌱 Ephemeral workspaces. 💎 Durable results. 🚀 Massive parallelism.

## 🚧 Why Native File Systems Are Not Enough

Conventional file systems were designed for long-lived applications and a small number of human-managed workspaces.

AI-agent workloads are different. A single computer may need to run thousands of agents, each with its own temporary workspace, while allowing them to share a large common codebase.

A conventional file-system workflow creates several problems:

- 📁 **Workspace duplication:** Each agent often receives a separate copy of the project.
- 💽 **Storage waste:** Repeated copies consume disk space even when most files are unchanged.
- 🐌 **Slow startup:** Creating a workspace becomes slower as the project grows.
- ⚔️ **Write conflicts:** Agents working on shared files can interfere with one another.
- 🔄 **Weak workspace lifecycle:** Native file systems do not understand when an agent workspace should be created, branched, published, or discarded.
- 🧹 **Expensive cleanup:** Temporary workspaces leave behind files, metadata, caches, and processes.
- 📤 **No agent-native publication:** A file system stores bytes, but it does not understand which agent produced a change, which base it came from, or whether it is ready to publish.

Native file systems are excellent at storing files.

They are not designed to manage thousands of short-lived, isolated, branching workspaces with explicit publication semantics.

That is the infrastructure gap we are building to close.

## 🧱 LayerFS: The Storage Foundation

### [💾 LayerFS](https://github.com/Ephemeral-AI-Lab/layerfs)

LayerFS is a high-speed, space-efficient virtual file system for large-scale agent workspaces.

Instead of creating a complete project copy for every agent, LayerFS allows agents to share unchanged content while keeping their own private changes and branches.

This makes it possible to create, modify, and discard agent workspaces without multiplying the storage and startup cost of the entire project.

LayerFS is designed to provide:

- ⚡ Fast workspace creation
- 💽 Efficient use of storage
- 🔒 Independent agent changes
- 🌿 Safe branching and experimentation
- 📤 Explicit publication of results
- 💎 Durable shared state

LayerFS is not just a file system for agents.

It is the storage foundation that makes high-density agent computing possible.

## 🛡️ Ephemeral Sandbox: The Execution Layer

### [⚙️ Ephemeral Sandbox](https://github.com/Ephemeral-AI-Lab/ephemeral-sandbox)

Ephemeral Sandbox is the execution layer for parallel coding agents.

It provides isolated environments where agents can write code, run commands, test changes, and publish results without interfering with one another.

LayerFS provides the efficient workspace layer.

Ephemeral Sandbox provides the safe execution layer.

Together, they allow agent workspaces to be created, used, isolated, and discarded at high speed.

## 🔀 Deltagit: Agent-Native Version Control

### [🧬 Deltagit](https://github.com/Ephemeral-AI-Lab/deltagit)

Deltagit explores an agent-native approach to version control.

Traditional version control was designed around human developers, commits, branches, and manually coordinated changes. Agent-driven development introduces many more short-lived branches, parallel attempts, automated edits, and machine-generated changes.

Deltagit explores how version control should work when agents are the primary contributors.

The goal is to rethink how software changes are:

- ✍️ Created
- 🔍 Compared
- 🤝 Coordinated
- ✅ Reviewed
- 🔀 Merged
- 📦 Published

## 🏗️ The Agent Infrastructure Stack

```text
💾 LayerFS
   Efficient, branchable storage for agent workspaces
                         ↓
🛡️ Ephemeral Sandbox
   Isolated execution for parallel coding agents
                         ↓
🔀 Deltagit
   Agent-native coordination and version control
                         ↓
💎 Durable software results
```

## 🌍 The Future We Are Building

We want a single computer to support thousands of agents working on software simultaneously.

Not thousands of full virtual machines.

Not thousands of duplicated project directories.

Not thousands of isolated systems that cannot share useful state.

We are building a more efficient model:

- 🌐 Shared underlying data
- 🔒 Private agent workspaces
- ⚡ Fast local changes
- 🧩 Safe parallel execution
- 📤 Explicit result publication
- 💎 Durable project history

AI agents will not remain isolated assistants responding to one prompt at a time. They will become collaborative engineering systems capable of exploring many solutions in parallel.

That future requires infrastructure built for agents from the ground up.

## 🌱 Open Source

We are building in public.

Explore the projects:

- [💾 LayerFS](https://github.com/Ephemeral-AI-Lab/layerfs)
- [🛡️ Ephemeral Sandbox](https://github.com/Ephemeral-AI-Lab/ephemeral-sandbox)
- [🔀 Deltagit](https://github.com/Ephemeral-AI-Lab/deltagit)
- [🖥️ Ephemeral AI Computer](https://github.com/Ephemeral-AI-Lab/ephemeral-ai-computer)
- [📚 Agent Infrastructure Research](https://github.com/Ephemeral-AI-Lab/research-papers)

> 🧪 Make execution ephemeral.  
> 💎 Make results durable.  
> 🚀 Build the infrastructure for thousands of agents.
