# n8n-nodes-ezyhr

This is an n8n community node that provides **comprehensive integration** with the **EzyHR API** for complete HR management operations. It supports both predefined actions and AI-autonomous mode for intelligent workflow automation.

**EzyHR** is a comprehensive HR management platform that handles employee data, leave requests, overtime tracking, training management, department organization, attendance monitoring, payroll processing, and much more. This node allows n8n workflows to interact with EzyHR's complete API suite with intelligent permission handling and AI-driven action selection.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[AI Autonomous Mode](#ai-autonomous-mode)  
[API Coverage](#api-coverage)  
[Resources](#resources)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Once installed, the `EzyHR` node will be available in your n8n workflows with **78+ operations** across **17 resource types**.

---

## Operations

### 👥 **People Management** (7 Operations)

- **Create**: Add new employees to the system with complete profile information
- **Delete**: Remove employees from the system (with safety checks)
- **Get**: Retrieve individual employee information by ID
- **List**: Get all employees with advanced filtering and pagination
- **Search**: Find employees using multiple search criteria and keywords
- **Update**: Modify existing employee data and profile information
- **Update Password**: Change employee login passwords securely

### 📋 **Request Management** (10 Operations)

- **Approve Request**: Approve pending leave/overtime requests with workflow integration
- **Create Leave Request**: Submit comprehensive leave applications with validation
- **Create Overtime Request**: Submit overtime requests with hour calculations
- **Get Checkin Request**: Retrieve check-in request details and status
- **Get Count Waiting**: Get real-time count of pending requests by type
- **Get Request**: Retrieve detailed information for specific requests
- **Import Leave Requests**: Bulk import leave requests from CSV/Excel files
- **Import Overtime Requests**: Bulk import overtime requests with validation
- **List Requests**: View all requests with advanced filtering and date ranges
- **Reject Request**: Reject requests with reason tracking and notifications

### 📊 **Dashboard & Analytics** (5 Operations)

- **Get Absent Data**: Comprehensive absenteeism tracking and analytics
- **Get Account Details**: Account-level statistics and configuration info
- **Get Dashboard Data**: Complete HR dashboard with KPIs and metrics
- **Get Leave Summary**: Detailed leave usage summaries by department/employee
- **Get Sick Leave Data**: Sick leave patterns and trend analysis

### ⚙️ **Configuration Management** (5 Operations)

- **Create**: Add new system configuration settings and parameters
- **Delete**: Remove configuration entries with dependency checking
- **Get**: Retrieve specific configuration values by group/key
- **List**: View all configurations organized by Company/System/User groups
- **Update**: Modify existing configuration settings with validation

### 👤 **User Account Management** (11 Operations)

- **Change Language**: Switch user interface language (Thai/English/etc.)
- **Change Password**: Update user passwords with security validation
- **Check Reset Token**: Verify password reset tokens and OTP codes
- **Get Profile**: Retrieve complete user profile information
- **Get Settings**: Get user preferences and personalization settings
- **Renew Token**: Refresh authentication tokens for extended sessions
- **Reset Password**: Complete password reset workflow with email verification
- **Send Reset OTP**: Send password reset verification codes via email/SMS
- **Signup**: Create new user accounts with role assignment
- **Update Profile**: Modify user profile data and personal information
- **Update Settings**: Change user preferences and notification settings

### 🏢 **Department Management** (5 Operations)

- **Create**: Add new departments with hierarchical structure support
- **Delete**: Remove departments with employee reassignment handling
- **Get**: Retrieve department information including employee counts
- **List**: View all departments with organizational hierarchy
- **Update**: Modify department structure, names, and reporting relationships

### 🎓 **Training & Development** (7 Operations)

- **Create Course**: Set up new training courses with schedules and materials
- **Delete Course**: Remove training courses with enrollment handling
- **Enroll**: Register employees in training programs with tracking
- **Get Course**: Retrieve detailed course information and requirements
- **Get People in Course**: View course enrollment lists and progress
- **List Courses**: Browse available training courses with filtering
- **Update Course**: Modify course content, schedules, and requirements

### 🏖️ **Leave Type Management** (5 Operations)

- **Create**: Define new leave types with rules and entitlements
- **Delete**: Remove leave types with usage impact analysis
- **Get**: Retrieve leave type details including policies and limits
- **List**: View all available leave types with entitlement information
- **Update**: Modify leave type settings, rules, and approval workflows

### 🏢 **Account & Site Management** (7 Operations)

- **Get Account Info**: Retrieve account information and subscription details
- **Switch Account**: Change between different company accounts (multi-tenant)
- **Create Site**: Add new office locations with address and contact info
- **Delete Site**: Remove office locations with employee reassignment
- **Get Site**: Retrieve site information including employee assignments
- **List Sites**: View all company locations with filtering options
- **Update Site**: Modify site details, addresses, and configurations

### 📄 **License Management** (2 Operations)

- **Add People License**: Assign software licenses to employees with tracking
- **Get License Info**: Retrieve licensing information and usage statistics

### 🕐 **Attendance Management** (1 Operation)

- **Get Abnormal Attendance**: Track attendance anomalies with detailed filtering by date ranges, departments, and employee groups

### 📧 **Email & Communication** (1 Operation)

- **Send Request Email**: Send automated request notifications and status updates to employees and managers

### 📚 **Curriculum Management** (4 Operations)

- **Get Categories**: Retrieve curriculum categories and learning paths
- **Get Category Detail**: View detailed category information with course listings
- **Get Curriculum**: Retrieve specific curriculum details and requirements
- **List Curriculum**: Browse all available curriculum with filtering and search

### 📁 **File Management** (2 Operations)

- **Sign File**: Digitally sign uploaded documents with audit trails
- **Upload File**: Upload documents and files to the system with metadata

### 💰 **PaySlip Management** (4 Operations)

- **Confirm PaySlip**: Confirm and approve payslips with digital signatures
- **Get PaySlip**: Retrieve individual payslip information with calculations
- **List PaySlips**: View all payslips with filtering by period and employee
- **Update Period**: Modify payslip periods and payroll cycles

### 🔧 **Support Tools & Administration** (2 Operations)

- **Change Full Staff ID**: Modify employee identification numbers with data integrity
- **Test Recalculate OT**: Test and validate overtime calculation algorithms

---

## AI Autonomous Mode

The AI Autonomous mode provides sophisticated natural language processing for complex HR workflows with **intelligent action planning** and **context-aware execution**.

### 🤖 **AI Capabilities**

- **Natural Language Understanding**: Process complex HR instructions in plain English/Thai
- **Multi-Action Orchestration**: Execute sequences of related operations automatically
- **Context Preservation**: Maintain conversation context across multiple operations
- **Permission-Aware Planning**: Only plan actions the user is authorized to perform
- **Smart Data Extraction**: Extract relevant information from natural language
- **Error Recovery**: Handle failures gracefully with alternative approaches

### **Advanced Supported Instructions**

#### **Employee Management**

```
"Find all employees in the marketing department hired after 2023"
"Get active staff members with pending training requirements"
"Search for employees with specific skills or certifications"
"Update contact information for all IT department employees"
"Create employee profiles for 5 new hires with department assignments"
```

#### **Leave & Request Processing**

```
"Create a 5-day annual leave request for John Doe from March 1-5"
"Approve all pending leave requests for the IT department this week"
"Submit 8 hours of overtime for employee ID 123 for last Friday"
"Get all rejected requests from this quarter and prepare follow-up reports"
"Show me how many leave requests are waiting for approval by department"
```

#### **Attendance & Time Management**

```
"Get abnormal attendance records for this month with detailed breakdown"
"Find employees with irregular check-in patterns in the last 30 days"
"Generate attendance summary report for all department managers"
"Identify employees with excessive late arrivals this quarter"
```

#### **Analytics & Reporting**

```
"Generate comprehensive monthly HR dashboard with leave statistics"
"Show me department-wise absence trends for the current year"
"Create sick leave pattern analysis for the last 6 months"
"Prepare payroll summary report for all departments this period"
"Get training completion rates by department and course type"
```

#### **Training & Development**

```
"Enroll all IT staff in the new cybersecurity training course"
"Get list of employees who completed mandatory safety training"
"Show curriculum categories and available professional development courses"
"Create training schedule for new employee onboarding program"
```

#### **Bulk Operations & Automation**

```
"Update all employees in sales department with new manager assignment"
"Import leave requests from the uploaded CSV file with validation"
"Send reminder emails for all pending overtime requests"
"Process all approved leave requests and update employee balances"
```

### **Complex Workflow Examples**

#### **Complete Employee Onboarding**

```
Instruction: "Set up new employee Sarah Johnson in Marketing with standard training and initial setup"

AI Execution Plan:

1. Create employee profile with personal details
2. Assign to Marketing department with proper hierarchy
3. Set up user account with temporary password
4. Enroll in mandatory training courses (Safety, HR Policies, IT Security)
5. Initialize leave balances based on company policy
6. Create payslip configuration with salary details
7. Send welcome email with login credentials and first-day information
8. Generate employee handbook and ID card request
9. Schedule orientation meetings with HR and department manager
```

#### **Monthly HR Analytics Dashboard**

```
Instruction: "Prepare comprehensive monthly HR report for executive team"

AI Execution Plan:

1. Get total employee count by department and employment status
2. Calculate leave utilization rates and remaining balances
3. Analyze attendance patterns and identify anomalies
4. Check training completion rates and compliance status
5. Generate payslip summaries and cost analysis
6. Compile recruitment and turnover statistics
7. Create executive dashboard with key HR metrics
8. Send automated report to management team
9. Schedule follow-up meetings for areas needing attention
```

#### **Leave Management Automation**

```
Instruction: "Process all pending leave requests, auto-approve policy-compliant ones, and notify employees"

AI Execution Plan:

1. Retrieve all pending leave requests across all departments
2. Check each request against company leave policies
3. Validate leave balances and entitlements
4. Auto-approve requests that meet all policy criteria
5. Flag policy violations and unusual patterns for manual review
6. Send approval notifications to employees and managers
7. Update leave balances and calendar systems
8. Generate approval summary report with statistics
9. Create alerts for requests requiring special attention
```

---

## API Coverage

This node provides **complete coverage** of the EzyHR API with **78+ operations** across **17 resource types**:

### **Core HR Functions** ✅

- **Employee Lifecycle Management**: Complete hire-to-retire processes
- **Leave & Absence Management**: Policy enforcement and approval workflows
- **Overtime & Time Tracking**: Automated calculations and approvals
- **Performance & Training**: Course management and progress tracking
- **Department Organization**: Hierarchical structure management
- **User Account Management**: Authentication and permission systems
- **Attendance Monitoring**: Real-time tracking and anomaly detection

### **Advanced Features** ✅

- **Bulk Data Operations**: Import/export with validation and error handling
- **Advanced Reporting**: Comprehensive analytics and dashboard generation
- **Multi-Tenant Support**: Account switching and company-specific configurations
- **Configuration Management**: System settings and customization options
- **License & Compliance**: Software license tracking and compliance monitoring
- **Audit Trails**: Complete operation logging and permission tracking
- **File Management**: Document upload, storage, and digital signing
- **Email Automation**: Notification systems and workflow communications
- **Payroll Integration**: PaySlip management and period processing

### **Integration Capabilities** ✅

- **Real-time Synchronization**: Live data updates and event handling
- **Webhook Support**: Event-driven workflow automation
- **Batch Processing**: Efficient handling of large datasets
- **Error Handling**: Comprehensive retry mechanisms and graceful degradation
- **Logging & Monitoring**: Detailed operation tracking and performance metrics
- **Multi-language Support**: Thai, English, and other localization options
- **Custom Field Handling**: Flexible data structure support
- **Advanced Filtering**: Complex search and filtering capabilities

---

## Credentials

You will need **EzyHR API credentials** to use this node.

### Getting Your API Credentials:

1. Log in to your EzyHR dashboard
2. Navigate to **Settings** → **Integrations** → **API Management**
3. Generate your API Key and Secret Key
4. Note your API base URL (usually `https://api.ezyhr.com/v1`)
5. Configure any necessary IP whitelisting or access restrictions

### Adding Credentials in n8n:

1. In n8n, create a new credential
2. Select **"EzyHR API"** as the credential type
3. Enter your credentials:
   - **Base URL**: Your EzyHR API base URL
   - **API Key**: Your EzyHR API Key from the Integration section
   - **Secret Key**: Your EzyHR Secret Key from the Integration section

---

## Usage

### **Predefined Actions Mode**

Perfect for controlled, predictable operations with full parameter control:

```json
{
  "mode": "predefined",
  "resource": "people",
  "operation": "search",
  "additionalFields": {
    "departmentId": "IT",
    "status": "active",
    "keyword": "developer",
    "limit": 50,
    "page": 1
  }
}
```

### **AI Autonomous Mode**

Ideal for complex, intelligent operations using natural language:

```json
{
  "mode": "autonomous",
  "aiInstruction": "Get all active employees in the IT department who have pending leave requests this month and send them reminder emails about policy compliance",
  "contextData": {
    "department": "IT",
    "includeRequests": true,
    "timeframe": "current_month",
    "sendNotifications": true,
    "policyCheck": true
  }
}
```

### **Advanced Usage Examples**

#### **Employee Search with Complex Filters**

```json
{
  "resource": "people",
  "operation": "search",
  "additionalFields": {
    "departmentId": "SALES",
    "status": "active",
    "keyword": "manager",
    "limit": 25
  },
  "dateRange": {
    "start": "2023-01-01",
    "end": "2024-12-31"
  }
}
```

#### **Bulk Leave Request Processing**

```json
{
  "resource": "request",
  "operation": "importLeave",
  "data": {
    "file": "leave_requests_march_2024.csv",
    "validateOnly": false,
    "autoApprove": false,
    "notifyEmployees": true
  }
}
```

#### **Training Enrollment Management**

```json
{
  "resource": "training",
  "operation": "enroll",
  "data": {
    "courseId": "SAFETY_101",
    "employeeIds": ["EMP001", "EMP002", "EMP003"],
    "enrollmentDate": "2024-01-15",
    "deadline": "2024-02-15",
    "mandatory": true
  }
}
```

---

## Error Handling & Security

### **Comprehensive Error Management**

- **API Errors**: Detailed error messages with resolution suggestions
- **Permission Errors**: Clear indication of insufficient access rights
- **Validation Errors**: Input validation with helpful correction guidance
- **Network Errors**: Automatic retry logic with exponential backoff
- **Rate Limiting**: Intelligent handling of API rate limits
- **Data Integrity**: Validation of data consistency and relationships
- **Timeout Handling**: Configurable timeout settings for different operations
- **Graceful Fallbacks**: Alternative actions when primary operations fail

### **Enterprise Security Features**

- **Permission System**: Granular access control with role-based permissions
- **Audit Logging**: Comprehensive operation tracking and compliance reporting
- **Data Encryption**: Secure transmission of sensitive HR data
- **Input Sanitization**: Protection against injection attacks and malformed data
- **Session Management**: Secure authentication token handling
- **IP Whitelisting**: Network-level access control support

---

## Performance & Scalability

### **Optimized Performance**

- **Efficient API Usage**: Optimized request patterns and batch operations
- **Intelligent Caching**: Smart caching of frequently accessed data
- **Connection Pooling**: Efficient HTTP connection management
- **Memory Optimization**: Optimized memory usage for large datasets
- **Pagination Support**: Automatic handling of large result sets
- **Concurrent Processing**: Parallel execution of independent operations

### **Scalability Features**

- **Bulk Operations**: Support for processing thousands of records
- **Rate Limit Management**: Automatic throttling and queue management
- **Resource Monitoring**: Performance metrics and usage tracking
- **Load Balancing**: Support for multiple API endpoints
- **Failover Support**: Automatic switching to backup systems

---

## Compatibility

- **Minimum n8n version**: `1.45.0` (with AI Agent Tool support)
- **Tested on**: `1.45.0`, `1.46.0`, `1.47.0`
- **Node.js**: `>=18.10.0`
- **TypeScript**: `^5.2.2`
- **No known incompatibilities**

---

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/#community-nodes)
- [EzyHR API Documentation](https://api.ezyhr.com/docs)
- [EzyHR Platform](https://ezyhr.com)
- [n8n Workflow Examples](https://n8n.io/workflows)
- [Community Support Forum](https://community.n8n.io)

---

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

### **Development Setup**

```bash

# Clone the repository

git clone https://github.com/orisma/n8n-nodes-ezyhr.git

# Install dependencies

npm install

# Start development mode

npm run dev

# Run tests

npm test

# Build for production

npm run build
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Changelog

### **Version 1.0.0** - Initial Release

- ✅ **78+ Operations** across 17 resource types
- ✅ **AI Autonomous Mode** with natural language processing
- ✅ **Complete CRUD Operations** for all major HR resources
- ✅ **Advanced Permission System** with role-based access control
- ✅ **Comprehensive Error Handling** and retry mechanisms
- ✅ **Bulk Operations Support** for large-scale data processing
- ✅ **File Management** with upload and digital signing
- ✅ **Email Notification** capabilities
- ✅ **Payroll and Attendance** management features
- ✅ **Multi-language Support** (Thai/English)
- ✅ **Enterprise Security** features and audit logging

---

**Note**: This node provides the most comprehensive EzyHR API integration available for n8n, with **78+ operations** covering every aspect of HR management from employee onboarding to payroll processing. The AI Autonomous mode makes it the most intelligent HR automation solution in the n8n ecosystem.

## Support

For support with this n8n community node:

- **GitHub Issues**: [Report bugs and request features](https://github.com/orisma/n8n-nodes-ezyhr/issues)
- **GitHub Discussions**: [Community discussions and Q&A](https://github.com/orisma/n8n-nodes-ezyhr/discussions)
- **n8n Community**: [General n8n support](https://community.n8n.io)

For EzyHR API support:

- **EzyHR Support**: [support@ezyhr.com](mailto:support@ezyhr.com)
- **API Documentation**: [EzyHR Developer Portal](https://api.ezyhr.com/docs)
