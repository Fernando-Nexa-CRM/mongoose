/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
declare const FlowLogsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    message: string;
    code?: string | undefined;
    flowId?: mongoose.Types.ObjectId | undefined;
    jid?: string | undefined;
    workspaceId?: mongoose.Types.ObjectId | undefined;
    stepId?: mongoose.Types.ObjectId | undefined;
    payload?: string | undefined;
    stack?: string | undefined;
}>;
type FlowLogsSchemaType = mongoose.InferSchemaType<typeof FlowLogsSchema>;
declare const FlowLogs: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    message: string;
    code?: string | undefined;
    flowId?: mongoose.Types.ObjectId | undefined;
    jid?: string | undefined;
    workspaceId?: mongoose.Types.ObjectId | undefined;
    stepId?: mongoose.Types.ObjectId | undefined;
    payload?: string | undefined;
    stack?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    message: string;
    code?: string | undefined;
    flowId?: mongoose.Types.ObjectId | undefined;
    jid?: string | undefined;
    workspaceId?: mongoose.Types.ObjectId | undefined;
    stepId?: mongoose.Types.ObjectId | undefined;
    payload?: string | undefined;
    stack?: string | undefined;
}>>;
export { FlowLogsSchema, FlowLogs, FlowLogsSchemaType };
