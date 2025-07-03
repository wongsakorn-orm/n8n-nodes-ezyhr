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
            description: "Interact with EzyHR API for HR management operations",
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
                            name: "Configuration",
                            value: "configuration",
                        },
                        {
                            name: "Dashboard",
                            value: "dashboard",
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
                            name: "Get",
                            value: "get",
                            description: "Get people information",
                            action: "Get people information",
                        },
                        {
                            name: "Create",
                            value: "create",
                            description: "Create a new person",
                            action: "Create a new person",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update person information",
                            action: "Update person information",
                        },
                        {
                            name: "List",
                            value: "list",
                            description: "List all people",
                            action: "List all people",
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
                            name: "Create Leave Request",
                            value: "createLeave",
                            description: "Create a leave request",
                            action: "Create a leave request",
                        },
                        {
                            name: "Create Overtime Request",
                            value: "createOvertime",
                            description: "Create an overtime request",
                            action: "Create an overtime request",
                        },
                        {
                            name: "Get Request Status",
                            value: "getStatus",
                            action: "Get request status",
                        },
                        {
                            name: "Import Requests",
                            value: "import",
                            action: "Import requests from file",
                        },
                    ],
                    default: "createLeave",
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
                    placeholder: 'e.g., "Get all employees in the IT department" or "Create a leave request for John Doe"',
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
                    displayName: "People ID",
                    name: "peopleId",
                    type: "string",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["people"],
                            operation: ["get", "update"],
                        },
                    },
                    default: "",
                },
                {
                    displayName: "People Data",
                    name: "peopleData",
                    type: "json",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["people"],
                            operation: ["create", "update"],
                        },
                    },
                    default: "{}",
                    description: "The people data to create or update",
                },
                {
                    displayName: "Request Data",
                    name: "requestData",
                    type: "json",
                    displayOptions: {
                        show: {
                            mode: ["predefined"],
                            resource: ["request"],
                            operation: ["createLeave", "createOvertime"],
                        },
                    },
                    default: "{}",
                    description: "The request data to create",
                },
                {
                    displayName: "Additional Fields",
                    name: "additionalFields",
                    type: "collection",
                    placeholder: "Add Field",
                    default: {},
                    options: [
                        {
                            displayName: "Page",
                            name: "page",
                            type: "number",
                            default: 1,
                            description: "Page number for pagination",
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
                            displayName: "Keyword",
                            name: "keyword",
                            type: "string",
                            default: "",
                            description: "Search keyword",
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
            endpoint = buildPeopleEndpoint(this, operation, itemIndex);
            ({ method, body, qs } = buildPeopleRequest(this, operation, itemIndex, additionalFields));
            break;
        case "request":
            endpoint = buildRequestEndpoint(this, operation, itemIndex);
            ({ method, body, qs } = buildRequestRequest(this, operation, itemIndex, additionalFields));
            break;
        case "dashboard":
            endpoint = "/dashboard";
            qs = { mode: "account_detail", ...additionalFields };
            break;
        case "configuration":
            endpoint = "/config";
            qs = { group: "COMPANY", ...additionalFields };
            break;
        case "training":
            endpoint = "/training/courses";
            qs = additionalFields;
            break;
        case "sites":
            endpoint = "/site";
            qs = additionalFields;
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
    if (lowerInstruction.includes("get") &&
        lowerInstruction.includes("employee")) {
        actions.push({
            name: "Get People List",
            resource: "people",
            operation: "list",
            method: "GET",
            endpoint: "/people",
            qs: extractFilters(instruction),
        });
    }
    if (lowerInstruction.includes("create") &&
        lowerInstruction.includes("leave")) {
        actions.push({
            name: "Create Leave Request",
            resource: "request",
            operation: "createLeave",
            method: "POST",
            endpoint: "/request/leave",
            body: extractLeaveData(instruction, context),
        });
    }
    if (lowerInstruction.includes("overtime")) {
        actions.push({
            name: "Create Overtime Request",
            resource: "request",
            operation: "createOvertime",
            method: "POST",
            endpoint: "/request/overtime",
            body: extractOvertimeData(instruction, context),
        });
    }
    return {
        originalInstruction: instruction,
        actions: actions,
        confidence: calculateConfidence(actions, instruction),
    };
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
function buildPeopleEndpoint(context, operation, itemIndex) {
    switch (operation) {
        case "get":
        case "update":
            const peopleId = context.getNodeParameter("peopleId", itemIndex);
            return `/people/${peopleId}`;
        case "create":
        case "list":
            return "/people";
        default:
            return "/people";
    }
}
function buildPeopleRequest(context, operation, itemIndex, additionalFields) {
    let method = "GET";
    let body = {};
    const qs = additionalFields;
    switch (operation) {
        case "create":
            method = "POST";
            body = context.getNodeParameter("peopleData", itemIndex, {});
            break;
        case "update":
            method = "PUT";
            body = context.getNodeParameter("peopleData", itemIndex, {});
            break;
    }
    return { method, body, qs };
}
function buildRequestEndpoint(context, operation, itemIndex) {
    switch (operation) {
        case "createLeave":
            return "/request/leave";
        case "createOvertime":
            return "/request/overtime";
        case "import":
            return "/request/import/leave";
        default:
            return "/request";
    }
}
function buildRequestRequest(context, operation, itemIndex, additionalFields) {
    let method = "GET";
    let body = {};
    const qs = additionalFields;
    switch (operation) {
        case "createLeave":
        case "createOvertime":
            method = "POST";
            body = context.getNodeParameter("requestData", itemIndex, {});
            break;
        case "import":
            method = "POST";
            break;
    }
    return { method, body, qs };
}
function extractFilters(instruction) {
    const filters = {};
    const deptMatch = instruction.match(/(?:in|from)\s+(?:the\s+)?(\w+)\s+department/i);
    if (deptMatch) {
        filters.department = deptMatch[1];
    }
    if (instruction.includes("active")) {
        filters.status = "active";
    }
    return filters;
}
function extractLeaveData(instruction, context) {
    const leaveData = {};
    const nameMatch = instruction.match(/for\s+([A-Za-z\s]+)/i);
    if (nameMatch) {
        leaveData.employeeName = nameMatch[1].trim();
    }
    if (context.employeeId) {
        leaveData.employeeId = context.employeeId;
    }
    return leaveData;
}
function extractOvertimeData(instruction, context) {
    const overtimeData = {};
    const hoursMatch = instruction.match(/(\d+)\s+hours?/i);
    if (hoursMatch) {
        overtimeData.hours = Number.parseInt(hoursMatch[1]);
    }
    Object.assign(overtimeData, context);
    return overtimeData;
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
        "employee",
        "leave",
        "overtime",
    ];
    const matches = keywords.filter((word) => relevantKeywords.includes(word));
    return Math.min(matches.length / relevantKeywords.length, 1);
}
function generateSummary(results) {
    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => r.error).length;
    return `Executed ${results.length} actions: ${successful} successful, ${failed} failed`;
}
//# sourceMappingURL=EzyHr.node.js.map