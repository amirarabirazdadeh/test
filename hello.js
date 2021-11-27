module.exports = async function(context) {
    const job = context.request.body.job_id;
    const jobStatus = context.request.body.job_status;

    // do some db write if required to save the status

    return {
        status: 200,
        body: "Successfully saved job status for job ID: " + job
    };
}
