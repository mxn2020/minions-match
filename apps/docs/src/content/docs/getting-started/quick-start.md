---
title: Quick Start
description: Get up and running with Minions Match in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-match/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_match import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
match info
```
