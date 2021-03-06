// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Organization extends pulumi.CustomResource {
    /**
     * Get an existing Organization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationState, opts?: pulumi.CustomResourceOptions): Organization {
        return new Organization(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'grafana:index/organization:Organization';

    /**
     * Returns true if the given object is an instance of Organization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Organization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Organization.__pulumiType;
    }

    public readonly adminUser!: pulumi.Output<string | undefined>;
    public readonly admins!: pulumi.Output<string[] | undefined>;
    public readonly createUsers!: pulumi.Output<boolean | undefined>;
    public readonly editors!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly orgId!: pulumi.Output<number>;
    public readonly viewers!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Organization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OrganizationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationArgs | OrganizationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as OrganizationState | undefined;
            inputs["adminUser"] = state ? state.adminUser : undefined;
            inputs["admins"] = state ? state.admins : undefined;
            inputs["createUsers"] = state ? state.createUsers : undefined;
            inputs["editors"] = state ? state.editors : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["orgId"] = state ? state.orgId : undefined;
            inputs["viewers"] = state ? state.viewers : undefined;
        } else {
            const args = argsOrState as OrganizationArgs | undefined;
            inputs["adminUser"] = args ? args.adminUser : undefined;
            inputs["admins"] = args ? args.admins : undefined;
            inputs["createUsers"] = args ? args.createUsers : undefined;
            inputs["editors"] = args ? args.editors : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["viewers"] = args ? args.viewers : undefined;
            inputs["orgId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Organization.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Organization resources.
 */
export interface OrganizationState {
    readonly adminUser?: pulumi.Input<string>;
    readonly admins?: pulumi.Input<pulumi.Input<string>[]>;
    readonly createUsers?: pulumi.Input<boolean>;
    readonly editors?: pulumi.Input<pulumi.Input<string>[]>;
    readonly name?: pulumi.Input<string>;
    readonly orgId?: pulumi.Input<number>;
    readonly viewers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Organization resource.
 */
export interface OrganizationArgs {
    readonly adminUser?: pulumi.Input<string>;
    readonly admins?: pulumi.Input<pulumi.Input<string>[]>;
    readonly createUsers?: pulumi.Input<boolean>;
    readonly editors?: pulumi.Input<pulumi.Input<string>[]>;
    readonly name?: pulumi.Input<string>;
    readonly viewers?: pulumi.Input<pulumi.Input<string>[]>;
}
