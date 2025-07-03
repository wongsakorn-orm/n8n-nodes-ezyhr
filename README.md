# n8n-nodes-ezyhr

This is an n8n community node that integrates with **EzyHR** API for comprehensive HR management operations. It supports both predefined actions and AI-autonomous mode for intelligent workflow automation.

**EzyHR** is a comprehensive HR management platform that handles employee data, leave requests, overtime tracking, training management, and more. This node allows n8n workflows to interact with EzyHR's API with intelligent permission handling and AI-driven action selection.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[AI Autonomous Mode](#ai-autonomous-mode)  
[Permission System](#permission-system)  
[Resources](#resources)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Once installed, the `EzyHR` node will be available in your n8n workflows.

---

## Operations

### Predefined Actions Mode

- **People Management**: Get, create, update, and list employees
- **Request Management**: Create leave requests, overtime requests, import requests
- **Dashboard Data**: Retrieve dashboard statistics and summaries
- **Configuration**: Access company configuration settings
- **Training**: Manage training courses and enrollments
- **Sites**: Manage company sites and locations

### AI Autonomous Mode

- **Natural Language Processing**: Understands complex instructions in natural language
- **Multi-Action Execution**: Can execute multiple related actions in sequence
- **Intelligent Filtering**: Automatically applies filters based on context
- **Permission-Aware**: Only attempts actions the user is authorized to perform

---

## Credentials

You will need **EzyHR API credentials** to use this node.

### Getting Your API Credentials:

1. Log in to your EzyHR dashboard
2. Navigate to the API/Integration section
3. Generate or obtain your session token (JWT)
4. Note your API base URL (usually `https://api.ezyhr.com/v1`)
5. If using multi-tenant setup, note your company path

### Adding Credentials in n8n:

1. In n8n, create a new credential
2. Select **"EzyHR API Key"** as the credential type
3. Enter your credentials:
   - **API Base URL**: Your EzyHR API base URL
   - **Session Token**: Your JWT session token
   - **Company Path**: (Optional) Your company path for multi-tenant setups

---

## Compatibility

- Minimum n8n version: `1.45.0`
- Tested on: `1.45.0`, `1.46.0`, `1.47.0`
- No known incompatibilities

---

## Usage

### Predefined Actions Mode

Use this mode when you need controlled, predictable behavior:

\`\`\`json
{
"mode": "predefined",
"resource": "people",
"operation": "list",
"additionalFields": {
"page": 1,
"limit": 50,
"keyword": "developer"
}
}
\`\`\`

### AI Autonomous Mode

Use this mode for complex, intelligent operations:

\`\`\`json
{
"mode": "autonomous",
"aiInstruction": "Get all employees in the IT department who have pending leave requests",
"contextData": {
"department": "IT",
"includeRequests": true
}
}
\`\`\`

## AI Autonomous Mode

The AI Autonomous mode is designed to understand natural language instructions and execute complex workflows:

### Supported Instructions:

- **Employee Queries**: "Get all employees in the marketing department"
- **Leave Management**: "Create a leave request for John Doe from March 1-5"
- **Overtime Tracking**: "Submit 8 hours of overtime for employee ID 123"
- **Data Analysis**: "Show me all pending requests for this month"
- **Bulk Operations**: "Update all employees in sales department with new manager"

### How It Works:

1. **Instruction Analysis**: The AI parses your natural language instruction
2. **Action Planning**: Creates a sequence of API calls needed to fulfill the request
3. **Permission Checking**: Verifies you have permission for each planned action
4. **Execution**: Executes the actions in the optimal order
5. **Result Compilation**: Combines results into a comprehensive response

### Example Workflows:

**Complex Employee Search:**
\`\`\`
Instruction: "Find all active employees in IT department hired after 2023 with pending training"
Result: Multi-step process that:

1. Filters employees by department and hire date
2. Checks employment status
3. Cross-references with training records
4. Returns consolidated results
   \`\`\`

**Leave Request Processing:**
\`\`\`
Instruction: "Create leave requests for all team leads for the holiday period"
Result: Batch operation that:

1. Identifies team leads
2. Creates individual leave requests
3. Handles any permission or validation errors
4. Provides summary of successful/failed requests
   \`\`\`

## Permission System

The node includes robust permission checking to ensure security:

### Permission Levels:

- **Read**: View data (GET operations)
- **Write**: Create/Update data (POST/PUT operations)
- **Delete**: Remove data (DELETE operations)
- **Admin**: Full access to all operations

### Permission Handling:

- **Pre-execution Check**: Verifies permissions before attempting any action
- **Graceful Degradation**: Skips unauthorized actions and continues with permitted ones
- **Clear Error Messages**: Provides specific information about permission failures
- **Audit Trail**: Logs all permission checks for security monitoring

### Error Responses:

\`\`\`json
{
"error": "Insufficient permissions",
"message": "You don't have permission to perform create on people",
"resource": "people",
"operation": "create",
"requiredPermission": "write"
}
\`\`\`

## Advanced Features

### Intelligent Data Filtering

The AI can automatically apply filters based on context:

\`\`\`javascript
// Input: "Show me employees who joined this year"
// AI automatically adds date filter:
{
"filters": {
"hireDate": {
"gte": "2024-01-01"
}
}
}
\`\`\`

### Multi-Step Workflows

Execute complex workflows with a single instruction:

\`\`\`javascript
// Input: "Prepare monthly HR report"
// AI executes multiple actions:
[
{ "action": "getEmployeeCount" },
{ "action": "getPendingRequests" },
{ "action": "getTrainingStats" },
{ "action": "compileReport" }
]
\`\`\`

### Context Awareness

The node maintains context across operations:

\`\`\`javascript
{
"contextData": {
"currentUser": "manager123",
"department": "Engineering",
"reportingPeriod": "2024-Q1"
}
}
\`\`\`

## Error Handling

The node provides comprehensive error handling:

- **API Errors**: Detailed error messages from EzyHR API
- **Permission Errors**: Clear indication of insufficient permissions
- **Validation Errors**: Input validation with helpful suggestions
- **Network Errors**: Retry logic and connection error handling

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/#community-nodes)
- [EzyHR API Documentation](https://ezyhr.com/docs)
- [EzyHR Platform](https://ezyhr.com)
- [n8n Workflow Examples](https://n8n.io/workflows)

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
