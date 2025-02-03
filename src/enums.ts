//enums
const enum Status {
    Active,
    Inactive,
    Pending
}

function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Active:
            return "The status is active.";
        case Status.Inactive:
            return "The status is inactive.";
        case Status.Pending:
            return "The status is pending.";
        default:
            return "Unknown status.";
    }
}

// Example usage
let currentStatus: Status = Status.Active;
console.log(getStatusMessage(currentStatus)); // Output: The status is active.