/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md
 */
import { SemanticAttributes } from '@opentelemetry/semantic-conventions';

interface AttributesType {
  GRPC_KIND: string;
  RPC_SYSTEM: string;
  GRPC_METHOD: string;
  RPC_SERVICE: string;
  GRPC_ERROR_NAME: string;
  GRPC_ERROR_MESSAGE: string;
}

const RPC_METHOD  = SemanticAttributes.RPC_METHOD;
const RPC_SYSTEM  = SemanticAttributes.RPC_SYSTEM;
const RPC_SERVICE  = SemanticAttributes.RPC_SERVICE;

export const AttributeNames: Readonly<AttributesType> = {
  GRPC_KIND: 'grpc.kind', // SERVER or CLIENT
  RPC_SYSTEM: RPC_SYSTEM,
  GRPC_METHOD: RPC_METHOD,
  RPC_SERVICE: RPC_SERVICE,
  GRPC_ERROR_NAME: 'grpc.error_name',
  GRPC_ERROR_MESSAGE: 'grpc.error_message',
};
