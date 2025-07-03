# n8n-nodes-ezyhr

This is an n8n community node that provides **comprehensive integration** with the **EzyHR API** for complete HR management operations. It supports both predefined actions and AI-autonomous mode for intelligent workflow automation.

**EzyHR** is a comprehensive HR management platform that handles employee data, leave requests, overtime tracking, training management, department organization, and much more. This node allows n8n workflows to interact with EzyHR's complete API suite with intelligent permission handling and AI-driven action selection.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[AI Autonomous Mode](#ai-autonomous-mode)  
[Permission System](#permission-system)  
[API Coverage](#api-coverage)  
[Resources](#resources)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Once installed, the `EzyHR` node will be available in your n8n workflows with full API coverage.

---

## Operations

### Comprehensive Resource Coverage

#### 👥 People Management

- **Get**: Retrieve individual employee information
- **Create**: Add new employees to the system
- **Update**: Modify existing employee data
- **Delete**: Remove employees from the system
- **List**: Get all employees with filtering
- **Search**: Advanced employee search with multiple criteria

#### 📋 Request Management

- **Create Leave Request**: Submit leave applications
- **Create Overtime Request**: Submit overtime requests
- **Get Request**: Retrieve specific request details
- **List Requests**: View all requests with filtering
- **Approve Request**: Approve pending requests
- **Reject Request**: Reject pending requests
- **Import Leave Requests**: Bulk import leave requests from files
- **Import Overtime Requests**: Bulk import overtime requests

#### 📊 Dashboard & Analytics

- **Get Dashboard Data**: Comprehensive dashboard statistics
- **Get Leave Summary**: Leave usage summaries and analytics
- **Get Absent Data**: Employee absence tracking
- **Get Sick Leave Data**: Sick leave statistics
- **Get Account Details**: Account-level information

#### ⚙️ Configuration Management

- **Get**: Retrieve system configurations
- **Create**: Add new configuration settings
- **Update**: Modify existing configurations
- **Delete**: Remove configuration entries
- **List**: View all configurations by group (Company/System/User)

#### 👤 User Management

- **Get Profile**: Retrieve user profile information
- **Update Profile**: Modify user profile data
- **Change Password**: Update user passwords
- **Renew Token**: Refresh authentication tokens
- **Get Settings**: Retrieve user preferences
- **Update Settings**: Modify user settings

#### 🏢 Department Management

- **Get**: Retrieve department information
- **Create**: Add new departments
- **Update**: Modify department structure
- **Delete**: Remove departments
- **List**: View all departments with hierarchy

#### 🎓 Training Management

- **Get Course**: Retrieve training course details
- **List Courses**: View all available courses
- **Create Course**: Add new training courses
- **Update Course**: Modify course information
- **Delete Course**: Remove training courses
- **Enroll**: Enroll employees in training programs

#### 📅 Leave Type Management

- **Get**: Retrieve leave type details
- **Create**: Add new leave types
- **Update**: Modify leave type settings
- **Delete**: Remove leave types
- **List**: View all available leave types

#### 🏢 Account & Sites

- **Switch Account**: Change between different company accounts
- **Get Account Info**: Retrieve account information
- **Site Management**: Complete CRUD operations for company sites

#### 📄 License Management

- **Add People License**: Assign licenses to employees
- **Get License Info**: Retrieve licensing information

### AI Autonomous Mode

- **Natural Language Processing**: Understands complex HR instructions
- **Multi-Action Execution**: Executes multiple related actions in sequence
- **Intelligent Filtering**: Automatically applies filters based on context
- **Permission-Aware**: Only attempts actions the user is authorized to perform
- **Context Understanding**: Maintains context across related operations

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
2. Select **"EzyHR API"** as the credential type
3. Enter your credentials:
   - **API Base URL**: Your EzyHR API base URL
   - **Session Token**: Your JWT session token
   - **Company Path**: (Optional) Your company path for multi-tenant setups

---

## Usage

### Predefined Actions Mode

Perfect for controlled, predictable operations:

\`\`\`json
{
"mode": "predefined",
"resource": "people",
"operation": "search",
"additionalFields": {
"departmentId": "IT",
"status": "active",
"keyword": "developer"
}
}
\`\`\`

### AI Autonomous Mode

Ideal for complex, intelligent operations:

\`\`\`json
{
"mode": "autonomous",
"aiInstruction": "Get all active employees in the IT department who have pending leave requests this month",
"contextData": {
"department": "IT",
"includeRequests": true,
"timeframe": "current_month"
}
}
\`\`\`

## AI Autonomous Mode

The AI Autonomous mode provides sophisticated natural language processing for complex HR workflows:

### Advanced Supported Instructions:

#### Employee Management:

- "Find all employees in the marketing department hired after 2023"
- "Get active staff members with pending training requirements"
- "Search for employees with specific skills or certifications"

#### Leave & Request Management:

- "Create a 5-day leave request for John Doe from March 1-5"
- "Approve all pending leave requests for the IT department"
- "Submit 8 hours of overtime for employee ID 123 for last Friday"
- "Get all rejected requests from this quarter"

#### Analytics & Reporting:

- "Generate monthly HR dashboard report with leave statistics"
- "Show me department-wise absence trends for this year"
- "Get sick leave patterns for the last 6 months"

#### Bulk Operations:

- "Update all employees in sales department with new manager"
- "Enroll all IT staff in the new security training course"
- "Import leave requests from the uploaded CSV file"

### How It Works:

1. **Advanced Instruction Analysis**: AI parses complex natural language instructions
2. **Multi-Step Action Planning**: Creates optimized sequences of API calls
3. **Context-Aware Processing**: Maintains context across related operations
4. **Permission Validation**: Verifies authorization for each planned action
5. **Intelligent Execution**: Executes actions in the optimal order
6. **Comprehensive Result Compilation**: Combines results with detailed summaries

### Example Complex Workflows:

**Comprehensive Employee Onboarding:**
\`\`\`
Instruction: "Set up new employee John Smith in IT department with standard training enrollment"
AI Actions:

1. Create employee profile
2. Assign to IT department
3. Set up user account
4. Enroll in mandatory training courses
5. Generate onboarding checklist
   \`\`\`

**Monthly HR Analytics:**
\`\`\`
Instruction: "Prepare comprehensive monthly HR report for management"
AI Actions:

1. Get employee count by department
2. Calculate leave utilization rates
3. Analyze overtime trends
4. Check training completion rates
5. Generate executive summary
   \`\`\`

## API Coverage

This node provides **complete coverage** of the EzyHR API, including:

### Core HR Functions:

- ✅ Employee lifecycle management (hire to retire)
- ✅ Leave and absence management
- ✅ Overtime and time tracking
- ✅ Performance and training management
- ✅ Department and organizational structure
- ✅ User account and permission management

### Advanced Features:

- ✅ Bulk data import/export operations
- ✅ Advanced reporting and analytics
- ✅ Multi-tenant account switching
- ✅ Configuration and system settings
- ✅ License and compliance management
- ✅ Audit trails and permission checking

### Integration Capabilities:

- ✅ Real-time data synchronization
- ✅ Webhook support for event-driven workflows
- ✅ Batch processing for large datasets
- ✅ Error handling and retry mechanisms
- ✅ Comprehensive logging and monitoring

## Permission System

The node includes enterprise-grade permission checking:

### Permission Levels:

- **Read**: View data (GET operations)
- **Write**: Create/Update data (POST/PUT operations)
- **Delete**: Remove data (DELETE operations)
- **Admin**: Full access to all operations
- **Department**: Department-specific permissions
- **Manager**: Team management permissions

### Advanced Permission Features:

- **Pre-execution Validation**: Checks permissions before API calls
- **Granular Access Control**: Resource and operation-level permissions
- **Role-based Security**: Supports complex organizational hierarchies
- **Audit Logging**: Comprehensive permission check logging
- **Graceful Degradation**: Continues with permitted actions when some fail

## Error Handling

Comprehensive error management:

- **API Errors**: Detailed error messages from EzyHR API
- **Permission Errors**: Clear indication of insufficient permissions
- **Validation Errors**: Input validation with helpful suggestions
- **Network Errors**: Retry logic and connection error handling
- **Rate Limiting**: Automatic handling of API rate limits
- **Data Integrity**: Validation of data consistency

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/#community-nodes)
- [EzyHR API Documentation](https://ezyhr.com/docs)
- [EzyHR Platform](https://ezyhr.com)
- [n8n Workflow Examples](https://n8n.io/workflows)
- [Community Support Forum](https://community.n8n.io)

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: This node provides comprehensive coverage of the EzyHR API. For specific API endpoints or custom integrations, please refer to the EzyHR API documentation or contact support.
