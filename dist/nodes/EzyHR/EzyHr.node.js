"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EzyHR = void 0;
class EzyHR {
    constructor() {
        this.description = {
            displayName: "EzyHR",
            name: "ezyHr",
            icon: "file:ezyhr.svg",
            group: ["transform"],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: "Comprehensive EzyHR API integration for HR management operations",
            defaults: {
                name: "EzyHR",
            },
            inputs: ["main"],
            outputs: ["main"],
            credentials: [
                {
                    name: "ezyHRApi",
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: "={{$credentials.baseUrl}}",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
            properties: [
                {
                    displayName: "Mode",
                    name: "mode",
                    type: "options",
                    options: [
                        {
                            name: "Predefined Actions",
                            value: "predefined",
                            description: "Select from predefined actions with controlled behavior",
                        },
                        {
                            name: "AI Autonomous",
                            value: "autonomous",
                            description: "Let AI determine and execute actions based on input",
                        },
                    ],
                    default: "predefined",
                    description: "Choose the operational mode for the node",
                },
                {
                    displayName: "Resource",
                    name: "resource",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                        },
                    },
                    options: [
                        {
                            name: "Account",
                            value: "account",
                        },
                        {
                            name: "Configuration",
                            value: "configuration",
                        },
                        {
                            name: "Dashboard",
                            value: "dashboard",
                        },
                        {
                            name: "Department",
                            value: "department",
                        },
                        {
                            name: "Leave Type",
                            value: "leaveType",
                        },
                        {
                            name: "License",
                            value: "license",
                        },
                        {
                            name: "Person",
                            value: "people",
                        },
                        {
                            name: "Request",
                            value: "request",
                        },
                        {
                            name: "Site",
                            value: "sites",
                        },
                        {
                            name: "Training",
                            value: "training",
                        },
                        {
                            name: "User",
                            value: "user",
                        },
                    ],
                    default: "people",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["people"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            action: "Create a new person",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            action: "Delete a person",
                        },
                        {
                            name: "Get",
                            value: "get",
                            action: "Get person information",
                        },
                        {
                            name: "List",
                            value: "list",
                            action: "List all people",
                        },
                        {
                            name: "Search",
                            value: "search",
                            action: "Search people",
                        },
                        {
                            name: "Update",
                            value: "update",
                            action: "Update person information",
                        },
                    ],
                    default: "get",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["request"],
                        },
                    },
                    options: [
                        {
                            name: "Approve Request",
                            value: "approve",
                            action: "Approve a request",
                        },
                        {
                            name: "Create Leave Request",
                            value: "createLeave",
                            action: "Create a leave request",
                        },
                        {
                            name: "Create Overtime Request",
                            value: "createOvertime",
                            action: "Create an overtime request",
                        },
                        {
                            name: "Get Request",
                            value: "get",
                            action: "Get request details",
                        },
                        {
                            name: "Import Leave Requests",
                            value: "importLeave",
                            action: "Import leave requests from file",
                        },
                        {
                            name: "Import Overtime Requests",
                            value: "importOvertime",
                            action: "Import overtime requests from file",
                        },
                        {
                            name: "List Requests",
                            value: "list",
                            action: "List all requests",
                        },
                        {
                            name: "Reject Request",
                            value: "reject",
                            action: "Reject a request",
                        },
                    ],
                    default: "createLeave",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["dashboard"],
                        },
                    },
                    options: [
                        {
                            name: "Get Absent Data",
                            value: "absentData",
                            action: "Get absent data",
                        },
                        {
                            name: "Get Account Details",
                            value: "accountDetail",
                            action: "Get account details",
                        },
                        {
                            name: "Get Dashboard Data",
                            value: "get",
                            action: "Get dashboard statistics",
                        },
                        {
                            name: "Get Leave Summary",
                            value: "leaveSummary",
                            action: "Get leave summary data",
                        },
                        {
                            name: "Get Sick Leave Data",
                            value: "sickData",
                            action: "Get sick leave data",
                        },
                    ],
                    default: "get",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["configuration"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            action: "Create configuration",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            action: "Delete configuration",
                        },
                        {
                            name: "Get",
                            value: "get",
                            action: "Get configuration",
                        },
                        {
                            name: "List",
                            value: "list",
                            action: "List configurations",
                        },
                        {
                            name: "Update",
                            value: "update",
                            action: "Update configuration",
                        },
                    ],
                    default: "get",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["user"],
                        },
                    },
                    options: [
                        {
                            name: "Change Password",
                            value: "changePassword",
                            action: "Change user password",
                        },
                        {
                            name: "Get Profile",
                            value: "getProfile",
                            action: "Get user profile",
                        },
                        {
                            name: "Get Settings",
                            value: "getSettings",
                            action: "Get user settings",
                        },
                        {
                            name: "Renew Token",
                            value: "renewToken",
                            action: "Renew authentication token",
                        },
                        {
                            name: "Update Profile",
                            value: "updateProfile",
                            action: "Update user profile",
                        },
                        {
                            name: "Update Settings",
                            value: "updateSettings",
                            action: "Update user settings",
                        },
                    ],
                    default: "getProfile",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["department"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            action: "Create department",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            action: "Delete department",
                        },
                        {
                            name: "Get",
                            value: "get",
                            action: "Get department",
                        },
                        {
                            name: "List",
                            value: "list",
                            action: "List departments",
                        },
                        {
                            name: "Update",
                            value: "update",
                            action: "Update department",
                        },
                    ],
                    default: "list",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["training"],
                        },
                    },
                    options: [
                        {
                            name: "Create Course",
                            value: "createCourse",
                            action: "Create training course",
                        },
                        {
                            name: "Delete Course",
                            value: "deleteCourse",
                            action: "Delete training course",
                        },
                        {
                            name: "Enroll",
                            value: "enroll",
                            action: "Enroll in training course",
                        },
                        {
                            name: "Get Course",
                            value: "getCourse",
                            action: "Get training course",
                        },
                        {
                            name: "List Courses",
                            value: "listCourses",
                            action: "List training courses",
                        },
                        {
                            name: "Update Course",
                            value: "updateCourse",
                            action: "Update training course",
                        },
                    ],
                    default: "listCourses",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["leaveType"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            action: "Create leave type",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            action: "Delete leave type",
                        },
                        {
                            name: "Get",
                            value: "get",
                            action: "Get leave type",
                        },
                        {
                            name: "List",
                            value: "list",
                            action: "List leave types",
                        },
                        {
                            name: "Update",
                            value: "update",
                            action: "Update leave type",
                        },
                    ],
                    default: "list",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["account"],
                        },
                    },
                    options: [
                        {
                            name: "Switch Account",
                            value: "switch",
                            action: "Switch to different account",
                        },
                        {
                            name: "Get Account Info",
                            value: "getInfo",
                            action: "Get account information",
                        },
                    ],
                    default: "getInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["sites"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            action: "Create new site",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            action: "Delete site",
                        },
                        {
                            name: "Get",
                            value: "get",
                            action: "Get site information",
                        },
                        {
                            name: "List",
                            value: "list",
                            action: "List all sites",
                        },
                        {
                            name: "Update",
                            value: "update",
                            action: "Update site information",
                        },
                    ],
                    default: "list",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["license"],
                        },
                    },
                    options: [
                        {
                            name: "Add People License",
                            value: "addPeople",
                            action: "Add people license",
                        },
                        {
                            name: "Get License Info",
                            value: "getInfo",
                            action: "Get license information",
                        },
                    ],
                    default: "getInfo",
                },
                {
                    displayName: "AI Instruction",
                    name: "aiInstruction",
                    type: "string",
                    displayOptions: {
                        show: {
                            mode: ["autonomous"],
                        },
                    },
                    default: "",
                    placeholder: 'e.g., "Get all employees in IT department with pending leave requests" or "Create overtime request for 8 hours"',
                },
                {
                    displayName: "Context Data",
                    name: "contextData",
                    type: "json",
                    displayOptions: {
                        show: {
                            mode: ["autonomous"],
                        },
                    },
                    default: "{}",
                    description: "Additional context data to help AI make decisions",
                },
                {
                    displayName: "Resource ID",
                    name: "resourceId",
                    type: "string",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: [
                                "people",
                                "department",
                                "training",
                                "sites",
                                "leaveType",
                                "configuration",
                            ],
                            operation: ["get", "update", "delete"],
                        },
                    },
                    default: "",
                    description: "The ID of the resource",
                },
                {
                    displayName: "Request ID",
                    name: "requestId",
                    type: "string",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["request"],
                            operation: ["get", "approve", "reject"],
                        },
                    },
                    default: "",
                    description: "The ID of the request",
                },
                {
                    displayName: "Dashboard Mode",
                    name: "dashboardMode",
                    type: "options",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["dashboard"],
                            operation: ["get"],
                        },
                    },
                    options: [
                        {
                            name: "Account Detail",
                            value: "account_detail",
                        },
                        {
                            name: "Leave Summary",
                            value: "leave_summary",
                        },
                        {
                            name: "Absent Data",
                            value: "absent_data",
                        },
                        {
                            name: "Sick Data",
                            value: "sick_data",
                        },
                    ],
                    default: "account_detail",
                },
                {
                    displayName: "Configuration Group",
                    name: "configGroup",
                    type: "options",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["configuration"],
                        },
                    },
                    options: [
                        {
                            name: "Company",
                            value: "COMPANY",
                        },
                        {
                            name: "System",
                            value: "SYSTEM",
                        },
                        {
                            name: "User",
                            value: "USER",
                        },
                    ],
                    default: "COMPANY",
                },
                {
                    displayName: "Data",
                    name: "data",
                    type: "json",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            operation: [
                                "create",
                                "update",
                                "createLeave",
                                "createOvertime",
                                "enroll",
                            ],
                        },
                    },
                    default: "{}",
                    description: "The data to send with the request",
                },
                {
                    displayName: "Date Range",
                    name: "dateRange",
                    type: "collection",
                    placeholder: "Add Date Range",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["dashboard", "request"],
                        },
                    },
                    default: {},
                    options: [
                        {
                            displayName: "Start Date",
                            name: "start",
                            type: "dateTime",
                            default: "",
                            description: "Start date for the query",
                        },
                        {
                            displayName: "End Date",
                            name: "end",
                            type: "dateTime",
                            default: "",
                            description: "End date for the query",
                        },
                    ],
                },
                {
                    displayName: "Additional Fields",
                    name: "additionalFields",
                    type: "collection",
                    placeholder: "Add Field",
                    default: {},
                    options: [
                        {
                            displayName: "Department ID",
                            name: "departmentId",
                            type: "string",
                            default: "",
                            description: "Filter by department ID",
                        },
                        {
                            displayName: "Full Staff ID",
                            name: "fullstaffId",
                            type: "string",
                            default: "",
                            description: "Full staff ID for filtering",
                        },
                        {
                            displayName: "Keyword",
                            name: "keyword",
                            type: "string",
                            default: "",
                            description: "Search keyword",
                        },
                        {
                            displayName: "Limit",
                            name: "limit",
                            type: "number",
                            typeOptions: {
                                minValue: 1,
                            },
                            default: 50,
                            description: "Max number of results to return",
                        },
                        {
                            displayName: "Page",
                            name: "page",
                            type: "number",
                            default: 1,
                            description: "Page number for pagination",
                        },
                        {
                            displayName: "Status",
                            name: "status",
                            type: "options",
                            options: [
                                {
                                    name: "Active",
                                    value: "active",
                                },
                                {
                                    name: "Approved",
                                    value: "approved",
                                },
                                {
                                    name: "Inactive",
                                    value: "inactive",
                                },
                                {
                                    name: "Pending",
                                    value: "pending",
                                },
                                {
                                    name: "Rejected",
                                    value: "rejected",
                                },
                            ],
                            default: "active",
                            description: "Filter by status",
                        },
                    ],
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const mode = this.getNodeParameter("mode", i);
                if (mode === "predefined") {
                    const result = await executePredefinedAction.call(this, i);
                    returnData.push(result);
                }
                else {
                    const result = await executeAutonomousAction.call(this, i);
                    returnData.push(result);
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({
                        json: { error: error.message },
                        pairedItem: { item: i },
                    });
                }
                else {
                    throw error;
                }
            }
        }
        return [returnData];
    }
}
exports.EzyHR = EzyHR;
async function executePredefinedAction(itemIndex) {
    const resource = this.getNodeParameter("resource", itemIndex);
    const operation = this.getNodeParameter("operation", itemIndex);
    const additionalFields = this.getNodeParameter("additionalFields", itemIndex);
    let endpoint = "";
    let method = "GET";
    let body = {};
    let qs = {};
    switch (resource) {
        case "people":
            ({ endpoint, method, body, qs } = await buildPeopleRequest(this, operation, itemIndex, additionalFields));
            break;
        case "request":
            ({ endpoint, method, body, qs } = await buildRequestRequest(this, operation, itemIndex, additionalFields));
            break;
        case "dashboard":
            ({ endpoint, method, body, qs } = await buildDashboardRequest(this, operation, itemIndex, additionalFields));
            break;
        case "configuration":
            ({ endpoint, method, body, qs } = await buildConfigurationRequest(this, operation, itemIndex, additionalFields));
            break;
        case "user":
            ({ endpoint, method, body, qs } = await buildUserRequest(this, operation, itemIndex, additionalFields));
            break;
        case "department":
            ({ endpoint, method, body, qs } = await buildDepartmentRequest(this, operation, itemIndex, additionalFields));
            break;
        case "training":
            ({ endpoint, method, body, qs } = await buildTrainingRequest(this, operation, itemIndex, additionalFields));
            break;
        case "leaveType":
            ({ endpoint, method, body, qs } = await buildLeaveTypeRequest(this, operation, itemIndex, additionalFields));
            break;
        case "account":
            ({ endpoint, method, body, qs } = await buildAccountRequest(this, operation, itemIndex, additionalFields));
            break;
        case "sites":
            ({ endpoint, method, body, qs } = await buildSitesRequest(this, operation, itemIndex, additionalFields));
            break;
        case "license":
            ({ endpoint, method, body, qs } = await buildLicenseRequest(this, operation, itemIndex, additionalFields));
            break;
    }
    const hasPermission = await checkPermissions.call(this, resource, operation);
    if (!hasPermission) {
        return {
            json: {
                error: "Insufficient permissions",
                message: `You don't have permission to perform ${operation} on ${resource}`,
                resource,
                operation,
            },
            pairedItem: { item: itemIndex },
        };
    }
    const options = {
        method,
        url: endpoint,
        body,
        qs,
    };
    const response = await this.helpers.httpRequestWithAuthentication.call(this, "ezyHRApi", options);
    return {
        json: response,
        pairedItem: { item: itemIndex },
    };
}
async function executeAutonomousAction(itemIndex) {
    const aiInstruction = this.getNodeParameter("aiInstruction", itemIndex);
    const contextData = this.getNodeParameter("contextData", itemIndex);
    const actionPlan = analyzeInstruction(aiInstruction, contextData);
    const results = [];
    for (const action of actionPlan.actions) {
        const hasPermission = await checkPermissions.call(this, action.resource, action.operation);
        if (!hasPermission) {
            results.push({
                action: action.name,
                error: "Insufficient permissions",
                resource: action.resource,
                operation: action.operation,
            });
            continue;
        }
        try {
            const options = {
                method: action.method,
                url: action.endpoint,
                body: action.body || {},
                qs: action.qs || {},
            };
            const response = await this.helpers.httpRequestWithAuthentication.call(this, "ezyHRApi", options);
            results.push({
                action: action.name,
                success: true,
                data: response,
            });
        }
        catch (error) {
            results.push({
                action: action.name,
                error: error.message,
            });
        }
    }
    return {
        json: {
            instruction: aiInstruction,
            actionPlan: actionPlan,
            results: results,
            summary: generateSummary(results),
        },
        pairedItem: { item: itemIndex },
    };
}
function analyzeInstruction(instruction, context) {
    const lowerInstruction = instruction.toLowerCase();
    const actions = [];
    if (lowerInstruction.includes("employee") ||
        lowerInstruction.includes("staff") ||
        lowerInstruction.includes("people")) {
        if (lowerInstruction.includes("get") ||
            lowerInstruction.includes("find") ||
            lowerInstruction.includes("search")) {
            actions.push({
                name: "Search People",
                resource: "people",
                operation: "search",
                method: "GET",
                endpoint: "/people",
                qs: extractFilters(instruction),
            });
        }
        if (lowerInstruction.includes("create") ||
            lowerInstruction.includes("add")) {
            actions.push({
                name: "Create Person",
                resource: "people",
                operation: "create",
                method: "POST",
                endpoint: "/people",
                body: extractPersonData(instruction, context),
            });
        }
    }
    if (lowerInstruction.includes("leave")) {
        if (lowerInstruction.includes("create") ||
            lowerInstruction.includes("submit")) {
            actions.push({
                name: "Create Leave Request",
                resource: "request",
                operation: "createLeave",
                method: "POST",
                endpoint: "/request/leave",
                body: extractLeaveData(instruction, context),
            });
        }
        if (lowerInstruction.includes("approve")) {
            actions.push({
                name: "Approve Leave Request",
                resource: "request",
                operation: "approve",
                method: "PUT",
                endpoint: "/request/approve",
                body: { requestId: extractRequestId(instruction, context) },
            });
        }
    }
    if (lowerInstruction.includes("overtime") ||
        lowerInstruction.includes("ot")) {
        if (lowerInstruction.includes("create") ||
            lowerInstruction.includes("submit")) {
            actions.push({
                name: "Create Overtime Request",
                resource: "request",
                operation: "createOvertime",
                method: "POST",
                endpoint: "/request/overtime",
                body: extractOvertimeData(instruction, context),
            });
        }
    }
    if (lowerInstruction.includes("dashboard") ||
        lowerInstruction.includes("summary") ||
        lowerInstruction.includes("report")) {
        actions.push({
            name: "Get Dashboard Data",
            resource: "dashboard",
            operation: "get",
            method: "GET",
            endpoint: "/dashboard",
            qs: { mode: "account_detail", ...extractDateRange(instruction) },
        });
    }
    if (lowerInstruction.includes("department")) {
        if (lowerInstruction.includes("list") || lowerInstruction.includes("get")) {
            actions.push({
                name: "List Departments",
                resource: "department",
                operation: "list",
                method: "GET",
                endpoint: "/department",
                qs: extractFilters(instruction),
            });
        }
    }
    if (lowerInstruction.includes("training") ||
        lowerInstruction.includes("course")) {
        if (lowerInstruction.includes("list") || lowerInstruction.includes("get")) {
            actions.push({
                name: "List Training Courses",
                resource: "training",
                operation: "listCourses",
                method: "GET",
                endpoint: "/training/courses",
                qs: extractFilters(instruction),
            });
        }
        if (lowerInstruction.includes("enroll")) {
            actions.push({
                name: "Enroll in Training",
                resource: "training",
                operation: "enroll",
                method: "POST",
                endpoint: "/training/enroll",
                body: extractTrainingData(instruction, context),
            });
        }
    }
    return {
        originalInstruction: instruction,
        actions: actions,
        confidence: calculateConfidence(actions, instruction),
    };
}
async function buildPeopleRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/people";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const resourceId = context.getNodeParameter("resourceId", itemIndex, "");
    switch (operation) {
        case "get":
            endpoint = `/people/${resourceId}`;
            break;
        case "create":
            method = "POST";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "update":
            method = "PUT";
            endpoint = `/people/${resourceId}`;
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "delete":
            method = "DELETE";
            endpoint = `/people/${resourceId}`;
            body = { mode: "remove" };
            break;
        case "list":
        case "search":
            qs = { ...additionalFields };
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildRequestRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/request";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const requestId = context.getNodeParameter("requestId", itemIndex, "");
    const dateRange = context.getNodeParameter("dateRange", itemIndex, {});
    switch (operation) {
        case "createLeave":
            method = "POST";
            endpoint = "/request/leave";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "createOvertime":
            method = "POST";
            endpoint = "/request/overtime";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "get":
            endpoint = `/request/${requestId}`;
            break;
        case "list":
            qs = { ...additionalFields, ...dateRange };
            break;
        case "approve":
            method = "PUT";
            endpoint = `/request/${requestId}/approve`;
            break;
        case "reject":
            method = "PUT";
            endpoint = `/request/${requestId}/reject`;
            break;
        case "importLeave":
            method = "POST";
            endpoint = "/request/import/leave";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "importOvertime":
            method = "POST";
            endpoint = "/request/import/overtime";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildDashboardRequest(context, operation, itemIndex, additionalFields) {
    const endpoint = "/dashboard";
    const method = "GET";
    const body = {};
    let qs = additionalFields;
    const dashboardMode = context.getNodeParameter("dashboardMode", itemIndex, "account_detail");
    const dateRange = context.getNodeParameter("dateRange", itemIndex, {});
    switch (operation) {
        case "get":
            qs = { mode: dashboardMode, ...additionalFields, ...dateRange };
            break;
        case "leaveSummary":
            qs = { mode: "leave_summary", ...additionalFields, ...dateRange };
            break;
        case "absentData":
            qs = { mode: "absent_data", ...additionalFields, ...dateRange };
            break;
        case "sickData":
            qs = { mode: "sick_data", ...additionalFields, ...dateRange };
            break;
        case "accountDetail":
            qs = { mode: "account_detail", ...additionalFields };
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildConfigurationRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/config";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const resourceId = context.getNodeParameter("resourceId", itemIndex, "");
    const configGroup = context.getNodeParameter("configGroup", itemIndex, "COMPANY");
    switch (operation) {
        case "get":
            qs = { group: configGroup, ...additionalFields };
            break;
        case "create":
            method = "POST";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "update":
            method = "PUT";
            endpoint = `/config/${resourceId}`;
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "delete":
            method = "DELETE";
            endpoint = `/config/${resourceId}`;
            break;
        case "list":
            qs = { group: configGroup, ...additionalFields };
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildUserRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/user";
    let method = "GET";
    let body = {};
    const qs = additionalFields;
    switch (operation) {
        case "getProfile":
            endpoint = "/user/profile";
            break;
        case "updateProfile":
            method = "PUT";
            endpoint = "/user/profile";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "changePassword":
            method = "PUT";
            endpoint = "/user/password";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "renewToken":
            method = "POST";
            endpoint = "/user/renew/token";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "getSettings":
            endpoint = "/user/setting";
            break;
        case "updateSettings":
            method = "PUT";
            endpoint = "/user/setting";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildDepartmentRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/department";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const resourceId = context.getNodeParameter("resourceId", itemIndex, "");
    switch (operation) {
        case "get":
            endpoint = `/department/${resourceId}`;
            break;
        case "create":
            method = "POST";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "update":
            method = "PUT";
            endpoint = `/department/${resourceId}`;
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "delete":
            method = "DELETE";
            endpoint = `/department/${resourceId}`;
            break;
        case "list":
            qs = additionalFields;
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildTrainingRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/training";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const resourceId = context.getNodeParameter("resourceId", itemIndex, "");
    switch (operation) {
        case "getCourse":
            endpoint = `/training/courses/${resourceId}`;
            break;
        case "listCourses":
            endpoint = "/training/courses";
            qs = additionalFields;
            break;
        case "createCourse":
            method = "POST";
            endpoint = "/training/courses";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "updateCourse":
            method = "PUT";
            endpoint = `/training/courses/${resourceId}`;
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "deleteCourse":
            method = "DELETE";
            endpoint = `/training/courses/${resourceId}`;
            break;
        case "enroll":
            method = "POST";
            endpoint = "/training/enroll";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildLeaveTypeRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/leave/type";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const resourceId = context.getNodeParameter("resourceId", itemIndex, "");
    switch (operation) {
        case "get":
            endpoint = `/leave/type/${resourceId}`;
            break;
        case "create":
            method = "POST";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "update":
            method = "PUT";
            endpoint = `/leave/type/${resourceId}`;
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "delete":
            method = "DELETE";
            endpoint = `/leave/type/${resourceId}`;
            break;
        case "list":
            qs = additionalFields;
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildAccountRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/account";
    let method = "GET";
    let body = {};
    const qs = additionalFields;
    switch (operation) {
        case "switch":
            method = "POST";
            endpoint = "/account/switch";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "getInfo":
            endpoint = "/account/info";
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildSitesRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/site";
    let method = "GET";
    let body = {};
    let qs = additionalFields;
    const resourceId = context.getNodeParameter("resourceId", itemIndex, "");
    switch (operation) {
        case "get":
            endpoint = `/site/${resourceId}`;
            break;
        case "create":
            method = "POST";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "update":
            method = "PUT";
            endpoint = `/site/${resourceId}`;
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "delete":
            method = "DELETE";
            endpoint = `/site/${resourceId}`;
            break;
        case "list":
            qs = additionalFields;
            break;
    }
    return { endpoint, method, body, qs };
}
async function buildLicenseRequest(context, operation, itemIndex, additionalFields) {
    let endpoint = "/people/license";
    let method = "GET";
    let body = {};
    const qs = additionalFields;
    switch (operation) {
        case "addPeople":
            method = "POST";
            body = context.getNodeParameter("data", itemIndex, {});
            break;
        case "getInfo":
            endpoint = "/license/info";
            break;
    }
    return { endpoint, method, body, qs };
}
async function checkPermissions(resource, operation) {
    try {
        const options = {
            method: "GET",
            url: "/user/permissions",
            qs: { resource, operation },
        };
        const response = await this.helpers.httpRequestWithAuthentication.call(this, "ezyHRApi", options);
        return response.hasPermission === true;
    }
    catch (error) {
        return false;
    }
}
function extractFilters(instruction) {
    const filters = {};
    const deptMatch = instruction.match(/(?:in|from)\s+(?:the\s+)?(\w+)\s+department/i);
    if (deptMatch) {
        filters.departmentId = deptMatch[1];
    }
    if (instruction.includes("active"))
        filters.status = "active";
    if (instruction.includes("pending"))
        filters.status = "pending";
    if (instruction.includes("approved"))
        filters.status = "approved";
    if (instruction.includes("rejected"))
        filters.status = "rejected";
    const dateRange = extractDateRange(instruction);
    Object.assign(filters, dateRange);
    return filters;
}
function extractDateRange(instruction) {
    const dateRange = {};
    if (instruction.includes("this month")) {
        const now = new Date();
        dateRange.start = new Date(now.getFullYear(), now.getMonth(), 1)
            .toISOString()
            .split("T")[0];
        dateRange.end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
            .toISOString()
            .split("T")[0];
    }
    if (instruction.includes("this year")) {
        const now = new Date();
        dateRange.start = `${now.getFullYear()}-01-01`;
        dateRange.end = `${now.getFullYear()}-12-31`;
    }
    return dateRange;
}
function extractPersonData(instruction, context) {
    const personData = {};
    const nameMatch = instruction.match(/(?:employee|person|staff)\s+(?:named\s+)?([A-Za-z\s]+)/i);
    if (nameMatch) {
        personData.name = nameMatch[1].trim();
    }
    Object.assign(personData, context);
    return personData;
}
function extractLeaveData(instruction, context) {
    const leaveData = {};
    const nameMatch = instruction.match(/for\s+([A-Za-z\s]+)/i);
    if (nameMatch) {
        leaveData.employeeName = nameMatch[1].trim();
    }
    const dateMatch = instruction.match(/from\s+(\d{4}-\d{2}-\d{2})\s+to\s+(\d{4}-\d{2}-\d{2})/i);
    if (dateMatch) {
        leaveData.startDate = dateMatch[1];
        leaveData.endDate = dateMatch[2];
    }
    const daysMatch = instruction.match(/(\d+)\s+days?/i);
    if (daysMatch) {
        leaveData.days = Number.parseInt(daysMatch[1]);
    }
    Object.assign(leaveData, context);
    return leaveData;
}
function extractOvertimeData(instruction, context) {
    const overtimeData = {};
    const hoursMatch = instruction.match(/(\d+)\s+hours?/i);
    if (hoursMatch) {
        overtimeData.hours = Number.parseInt(hoursMatch[1]);
    }
    const nameMatch = instruction.match(/for\s+([A-Za-z\s]+)/i);
    if (nameMatch) {
        overtimeData.employeeName = nameMatch[1].trim();
    }
    Object.assign(overtimeData, context);
    return overtimeData;
}
function extractTrainingData(instruction, context) {
    const trainingData = {};
    const courseMatch = instruction.match(/(?:course|training)\s+([A-Za-z\s]+)/i);
    if (courseMatch) {
        trainingData.courseName = courseMatch[1].trim();
    }
    Object.assign(trainingData, context);
    return trainingData;
}
function extractRequestId(instruction, context) {
    const idMatch = instruction.match(/request\s+(?:id\s+)?(\d+)/i);
    if (idMatch) {
        return idMatch[1];
    }
    return context.requestId || "";
}
function calculateConfidence(actions, instruction) {
    if (actions.length === 0)
        return 0;
    const keywords = instruction.toLowerCase().split(" ");
    const relevantKeywords = [
        "get",
        "create",
        "update",
        "delete",
        "list",
        "search",
        "employee",
        "staff",
        "people",
        "person",
        "leave",
        "overtime",
        "request",
        "approve",
        "reject",
        "dashboard",
        "report",
        "summary",
        "department",
        "training",
        "course",
        "enroll",
    ];
    const matches = keywords.filter((word) => relevantKeywords.includes(word));
    return Math.min(matches.length / 3, 1);
}
function generateSummary(results) {
    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => r.error).length;
    const permissionDenied = results.filter((r) => r.error === "Insufficient permissions").length;
    let summary = `Executed ${results.length} actions: ${successful} successful, ${failed} failed`;
    if (permissionDenied > 0) {
        summary += `, ${permissionDenied} permission denied`;
    }
    return summary;
}
//# sourceMappingURL=EzyHr.node.js.map